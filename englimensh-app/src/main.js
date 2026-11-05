import curriculum from './data/curriculum.json';
import { gameCatalog, createRound, getGameQuestion } from './games.js';
import './style.css';

const app = document.querySelector('#app');
let selectedGrade = curriculum.grades[0].id;
let selectedTerm = 'term-1';
let selectedUnitId = 'unit-1';
let activeSection = 'overview';
let activeGame = '';
let gameRound = [];
let gameIndex = 0;
let gameScore = 0;
let answered = false;
let lastAnswerCorrect = false;

const sections = [
  ['overview','نظرة عامة'],['vocabulary','الكلمات'],['grammar','القواعد'],
  ['reading','القراءة والفهم'],['listening','الاستماع'],['practice','التدريبات والاختبارات'],
  ['games','Play & Learn · الألعاب']
];
const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const grade = () => curriculum.grades.find(g => g.id === selectedGrade);
const term = () => grade().terms.find(t => t.id === selectedTerm);
const currentUnit = () => (grade().unitIndex || []).find(u => u.id === selectedUnitId) || null;

function render(){
  const g=grade(), t=term(), u=currentUnit();
  const units = g.unitIndex || [];
  const sourceMode = g.sourceAvailability?.mode || 'not_reviewed';
  const sourceNotice = sourceMode === 'assessment_only'
    ? 'المتاح حاليًا للصف السادس هو كتاب التقييمات فقط. لم يُرفق كتاب الطالب، لذلك لن نضيف مفردات أو قواعد أو نصوصًا من كتاب غير متاح.'
    : 'تم استلام كتاب الطالب وكتاب التقييمات لهذا الصف. فهرس الوحدات أدناه مستخرج من صفحات Scope and Sequence، أما المحتوى التفصيلي والأسئلة فيُراجع قبل نشره.';
  const sourceLabel = sourceMode === 'assessment_only' ? 'التقييمات فقط' : 'كتاب الطالب + التقييمات';
  app.innerHTML = `
    <header class="topbar"><div class="brand"><div class="mark">E</div><div><strong>إنجليمنش</strong><small>EngliMensh · English, step by step</small></div></div><span class="tag">المناهج المصرية</span></header>
    <main>
      <section class="hero"><div><p class="eyebrow">LEARN · PRACTICE · ACHIEVE</p><h1>الإنجليزي… خطوة بخطوة</h1><p>من أولى ابتدائي إلى ثالثة ثانوي، بنظامي الثانوية العامة والبكالوريا المصرية.</p></div><div class="hero-art" aria-hidden="true">Aa</div></section>
      <section class="selector card">
        <label>اختار الصف<select id="grade">${curriculum.grades.map(x=>`<option value="${x.id}" ${x.id===selectedGrade?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label>
        <label>اختار الترم<select id="term">${g.terms.map(x=>`<option value="${x.id}" ${x.id===selectedTerm?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label>
        <label>الوحدة<select id="unit" ${units.length ? '' : 'disabled'}>${units.length ? units.map(x=>`<option value="${esc(x.id)}" ${x.id===selectedUnitId?'selected':''}>Unit ${x.number}: ${esc(x.title)}</option>`).join('') : '<option>لم يتم توثيق الوحدات بعد</option>'}</select></label>
      </section>
      <div class="notice"><b>مصادر الصف:</b> ${esc(sourceLabel)}. ${esc(sourceNotice)}</div>
      <nav class="tabs" aria-label="أقسام الوحدة">${sections.map(([id,label])=>`<button data-section="${id}" class="${activeSection===id?'active':''}">${label}</button>`).join('')}</nav>
      <section class="card content">${sectionContent(activeSection,g,t,u)}</section>
      <footer>إنجليمنش © · المحتوى التعليمي والألعاب مرتبطان بالمصدر بعد المراجعة</footer>
    </main>`;
  app.querySelector('#grade').addEventListener('change',e=>{
    selectedGrade=e.target.value; selectedTerm='term-1';
    selectedUnitId=grade().unitIndex?.[0]?.id || ''; resetGame(); render();
  });
  app.querySelector('#term').addEventListener('change',e=>{selectedTerm=e.target.value;resetGame();render()});
  app.querySelector('#unit')?.addEventListener('change',e=>{selectedUnitId=e.target.value;resetGame();render()});
  app.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>{activeSection=b.dataset.section;render()}));
  app.querySelectorAll('[data-game]').forEach(b=>b.addEventListener('click',()=>startGame(b.dataset.game)));
  app.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>answerQuestion(Number(b.dataset.answer))));
  app.querySelector('[data-next]')?.addEventListener('click',nextQuestion);
  app.querySelector('[data-speak]')?.addEventListener('click',speakCurrentWord);
  app.querySelector('[data-back-games]')?.addEventListener('click',()=>{resetGame();activeSection='games';render()});
}

function resetGame(){activeGame='';gameRound=[];gameIndex=0;gameScore=0;answered=false;}
function startGame(id){
  activeGame=id;
  gameRound=createRound(id, selectedGrade, selectedUnitId, 10);
  gameIndex=0;gameScore=0;answered=false;
  render();
}
function answerQuestion(choiceIndex){
  if(answered)return;
  const q=getGameQuestion(gameRound[gameIndex]);
  lastAnswerCorrect=choiceIndex===q.correctIndex;
  if(lastAnswerCorrect)gameScore++;
  answered=true;render();
}
function nextQuestion(){
  if(gameIndex<gameRound.length-1){gameIndex++;answered=false;render();}
  else {activeGame='complete';render();}
}
function speakCurrentWord(){
  const q=getGameQuestion(gameRound[gameIndex]);
  if(!q?.spokenWord || !('speechSynthesis' in window))return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(q.spokenWord);
  utterance.lang='en-US';utterance.rate=0.82;
  window.speechSynthesis.speak(utterance);
}

function gamesContent(){
  if(activeGame==='complete'){
    return `<div class="game-center"><div class="game-emoji">🏆</div><p class="eyebrow">ROUND COMPLETE</p><h2>أحسنت!</h2><p class="game-score">${gameScore} / ${gameRound.length}</p><p>نتيجتك في هذه الجولة الفردية.</p><button class="primary-btn" data-back-games>العودة للألعاب</button><button class="secondary-btn" data-game="${activeGame==='complete'?'penalty':'penalty'}">جولة جديدة · ضربات الجزاء</button></div>`;
  }
  if(activeGame){
    const q=getGameQuestion(gameRound[gameIndex]);
    if(!q)return '<p>لا توجد أسئلة موثقة كافية لهذه اللعبة في الوحدة المحددة حتى الآن.</p>';
    const progress=Math.round((gameIndex/gameRound.length)*100);
    const gameTitle=activeGame==='penalty'?'Penalty Kick · ضربات الجزاء':'Fishing Hunt · صيد الكلمات';
    return `<div class="game-head"><button class="text-btn" data-back-games>← كل الألعاب</button><span>${gameTitle}</span><b>${gameScore} ⭐</b></div>
      <div class="progress-track"><span style="width:${progress}%"></span></div>
      <div class="game-scene ${activeGame==='penalty'?'football-scene':'fishing-scene'}">
        ${activeGame==='penalty'?'<div class="goal">🥅</div><div class="football">⚽</div>':'<div class="sun">☀️</div><div class="pond">🌊　🐟　🌊　🐠　🌊</div>'}
        <div class="question-card">
          <small>QUESTION ${gameIndex+1} / ${gameRound.length}</small>
          <h3>${esc(q.prompt)}</h3>
          ${q.spokenWord?'<button class="listen-btn" data-speak>🔊 Listen</button>':''}
          <div class="answer-grid">${q.choices.map((choice,i)=>`<button class="answer-btn ${answered&&i===q.correctIndex?'correct':answered&&i===q.selectedIndex?'wrong':''}" data-answer="${i}" ${answered?'disabled':''}>${activeGame==='fishing'?'🐟 ':''}${esc(choice)}</button>`).join('')}</div>
          ${answered?`<div class="feedback ${lastAnswerCorrect?'good':'try-again'}">${lastAnswerCorrect?'Excellent! Goal scored!':'Not quite. The correct answer is: '+esc(q.choices[q.correctIndex])}</div><button class="primary-btn" data-next>${gameIndex===gameRound.length-1?'عرض النتيجة':'السؤال التالي'}</button>`:''}
        </div>
      </div>`;
  }
  const unit=currentUnit();
  const score=Number(localStorage.getItem('englimensh-solo-game-best')||0);
  return `<div class="games-intro"><p class="eyebrow">PLAY · THINK · LEARN</p><h2>Play & Learn</h2><p>ألعاب تعليمية فردية لتثبيت كلمات المنهج ومهاراته. لا يوجد لعب جماعي أو منافسة مباشرة مع طلاب آخرين.</p><div class="solo-progress">⭐ أفضل نتيجة محفوظة على هذا الجهاز: ${score}</div></div>
    <div class="games-grid">
      <button class="game-tile penalty-tile" data-game="penalty"><span class="tile-art">⚽🥅</span><b>Penalty Kick</b><small>اختر الكلمة التي تبدأ بالصوت أو الحرف المطلوب وسجّل هدفًا.</small><span class="tile-cta">العب الآن ←</span></button>
      <button class="game-tile fishing-tile" data-game="fishing"><span class="tile-art">🎣🐟</span><b>Fishing Hunt</b><small>استمع إلى الكلمة ثم اصطد السمكة التي تحمل كتابتها الصحيحة.</small><span class="tile-cta">العب الآن ←</span></button>
    </div>
    <div class="game-note"><b>مصدر الأسئلة:</b> ${unit?'Unit '+unit.number+': '+esc(unit.title):'الوحدة المحددة'} من كتاب الطالب للصف الأول. تُسحب الكلمات من ملفات الاستخراج الموثقة فقط؛ لا نضيف كلمات خارج الكتاب. بعض الوحدات لا تحتوي على مفردات عربية مقابلة، لذلك تعتمد اللعبة على النطق والتهجئة.</div>`;
}

function sectionContent(section,g,t,u){
  const titles={overview:'فهرس الوحدة ومراجعة المصدر',vocabulary:'Vocabulary · الكلمات',grammar:'Grammar · القواعد',reading:'Reading · القراءة والفهم',listening:'Listening Exam · امتحان الاستماع',practice:'Practice & Exams · التدريبات والاختبارات',games:'Play & Learn · الألعاب التعليمية'};
  if(section==='games')return gamesContent();
  const source = u?.indexSource;
  const sourcePages = source?.pdfPages?.join('، ') || 'قيد استكمال التوثيق';
  const sourceName = source?.file || 'لم يحدد مصدر بعد';
  const sourceType = source?.type === 'assessment-book' ? 'كتاب التقييمات' : 'كتاب الطالب – Scope and Sequence';
  const pending = '<div class="notice"><b>لم يُنشر محتوى هذا القسم بعد.</b><p>سيُضاف فقط بعد استخراجه من الكتاب أو التقييمات والتحقق من النص والإجابة ورقم الصفحة. لن نستخدم أسئلة أو نصوصًا مؤلفة لسد النقص.</p></div>';
  const overview = `<div class="notice"><b>الصف:</b> ${esc(g.label)} · ${esc(t.label)}<br><b>الوحدة:</b> ${u ? `Unit ${u.number}: ${esc(u.title)}` : 'لا توجد وحدة موثقة'}<br><b>حالة الفهرسة:</b> اسم الوحدة موثق؛ المحتوى التفصيلي قيد المراجعة.</div>
    <div class="grid"><article><span>30+</span><b>كلمة لكل وحدة</b><small>معنى عربي + شرح إنجليزي + مثال</small></article><article><span>MCQ</span><b>تدريبات واختبارات</b><small>مع تصحيح ونتيجة بعد توثيق الأسئلة</small></article><article><span>5</span><b>أقسام تعليمية</b><small>Vocabulary · Grammar · Reading · Listening · Practice</small></article></div>
    <div class="notice"><b>مرجع فهرس الوحدة:</b> ${esc(sourceType)}<br><b>الملف:</b> ${esc(sourceName)}<br><b>صفحات PDF:</b> ${esc(sourcePages)}</div>${pending}`;
  const body = section === 'overview' ? overview : `<p>هذا القسم مخصص لـ ${titles[section]} في ${u ? esc(u.title) : 'الوحدة المحددة'}.</p>${pending}`;
  return `<p class="eyebrow">ENG LISH · ${esc(g.stage.toUpperCase())}</p><h2>${titles[section]}</h2>${body}`;
}
render();
