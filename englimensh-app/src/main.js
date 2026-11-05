import curriculum from './data/curriculum.json';
import { getGradeOneUnit, getUnitVocabulary, getUnitPatterns, getUnitReading, getUnitListening } from './data/grade1-content.js';
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
const currentUnit = () => { const indexed = selectedTerm === 'term-1' ? (grade().unitIndex || []) : []; const available = term().units?.length ? term().units : indexed; return available.find(u => u.id === selectedUnitId) || null; };

function render(){
  const g=grade(), t=term(), u=currentUnit();
  const indexedUnits = selectedTerm === 'term-1' ? (g.unitIndex || []) : [];
  const units = t.units?.length ? t.units : indexedUnits;
  const sourceMode = g.sourceAvailability?.mode || 'not_verified';
  const sourceNotice = sourceMode === 'assessment_only'
    ? 'المتاح حاليًا للصف السادس هو كتاب التقييمات فقط. لم يُرفق كتاب الطالب، لذلك لن نضيف مفردات أو قواعد أو نصوصًا من كتاب غير متاح.'
    : sourceMode === 'student_book_and_assessments' ? 'فهرس الوحدات أدناه مستخرج من صفحات Scope and Sequence؛ أما المحتوى التفصيلي والأسئلة فلا تُعرض إلا بعد مراجعتها.' : sourceMode === 'student_book_only' ? 'تم ربط كتاب الطالب. لم يُربط كتاب تقييمات مستقل لهذا الصف؛ وسيُستخرج المحتوى من كتاب الطالب فقط.' : 'لم يتم ربط مصدر موثق بهذا الصف بعد؛ لذلك لن نعرض محتوى أو وحدات تخمينية.';
  const sourceLabel = sourceMode === 'assessment_only' ? 'كتاب التقييمات فقط' : sourceMode === 'student_book_and_assessments' ? 'كتاب الطالب + التقييمات' : sourceMode === 'student_book_only' ? 'كتاب الطالب فقط' : 'مصدر الكتاب قيد التحقق';
  app.innerHTML = `
    <header class="topbar"><div class="brand"><div class="mark">E</div><div><strong>إنجليمنش</strong><small>EngliMensh · English, step by step</small></div></div><span class="tag">المناهج المصرية</span></header>
    <main>
      <section class="hero"><div><p class="eyebrow">LEARN · PRACTICE · ACHIEVE</p><h1>الإنجليزي… خطوة بخطوة</h1><p>من أولى ابتدائي إلى ثالثة ثانوي عام وفق الكتب المصرية الموثقة.</p></div><div class="hero-art" aria-hidden="true">Aa</div></section>
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
  gameRound[gameIndex].selectedIndex=choiceIndex;
  answered=true;render();
}
function nextQuestion(){
  if(gameIndex<gameRound.length-1){gameIndex++;answered=false;render();}
  else {activeGame='complete';const best=Number(localStorage.getItem('englimensh-solo-game-best')||0);if(gameScore>best)localStorage.setItem('englimensh-solo-game-best',String(gameScore));render();}
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
    return `<div class="game-center"><div class="game-emoji">🏆</div><p class="eyebrow">ROUND COMPLETE</p><h2>أحسنت!</h2><p class="game-score">${gameScore} / ${gameRound.length}</p><p>نتيجتك في هذه الجولة الفردية.</p><button class="primary-btn" data-back-games>العودة للألعاب</button></div>`;
  }
  if(activeGame){
    const q=getGameQuestion(gameRound[gameIndex]);
    if(!q)return `<div class="notice"><b>هذه اللعبة غير متاحة في الوحدة الحالية.</b><p>لا توجد بيانات مصدر موثقة كافية لهذا النوع من الأسئلة. جرّب لعبة أخرى أو وحدة أخرى.</p><button class="secondary-btn" data-back-games>العودة للألعاب</button></div>`;
    const game=gameCatalog.find(x=>x.id===activeGame);
    const progress=Math.round(((gameIndex+1)/gameRound.length)*100);
    return `<div class="game-head"><button class="text-btn" data-back-games>← كل الألعاب</button><span>${game.icon} ${game.title}</span><b>${gameScore} ⭐</b></div>
      <div class="progress-track"><span style="width:${progress}%"></span></div>
      <div class="game-scene game-${game.theme}">
        <div class="game-decor" aria-hidden="true">${game.icon}</div>
        <div class="question-card">
          <small>QUESTION ${gameIndex+1} / ${gameRound.length}</small>
          <h3>${esc(q.prompt)}</h3>
          ${q.spokenWord?`<button class="listen-btn" data-speak>🔊 Listen</button>`:''}
          ${q.kind==='builder'?'<p class="builder-hint">Choose the letters in the correct order.</p>':''}
          <div class="answer-grid">${q.choices.map((choice,i)=>`<button class="answer-btn ${answered&&i===q.correctIndex?'correct':answered&&i===q.selectedIndex?'wrong':''}" data-answer="${i}" ${answered?'disabled':''}>${esc(choice)}</button>`).join('')}</div>
          ${answered?`<div class="feedback ${lastAnswerCorrect?'good':'try-again'}">${lastAnswerCorrect?'Excellent! Correct answer!':'Not quite. The correct answer is: '+esc(q.choices[q.correctIndex])}</div><button class="primary-btn" data-next>${gameIndex===gameRound.length-1?'عرض النتيجة':'السؤال التالي'}</button>`:''}
        </div>
      </div>`;
  }
  const unit=currentUnit();
  const score=Number(localStorage.getItem('englimensh-solo-game-best')||0);
  return `<div class="games-intro"><p class="eyebrow">PLAY · THINK · LEARN</p><h2>Play & Learn</h2><p>ست ألعاب تعليمية فردية، دون لعب جماعي. اختر اللعبة وابدأ التدريب على محتوى الوحدة المحددة.</p><div class="solo-progress">⭐ أفضل نتيجة محفوظة على هذا الجهاز: ${score}</div></div>
    <div class="games-grid">${gameCatalog.map(game=>`<button class="game-tile ${game.theme}-tile" data-game="${game.id}"><span class="tile-art">${game.icon}</span><b>${game.title}</b><small>${game.subtitle}</small><span class="tile-cta">العب الآن ←</span></button>`).join('')}</div>
    <div class="game-note"><b>مصدر المحتوى:</b> ${unit?'Unit '+unit.number+': '+esc(unit.title):'الوحدة المحددة'} من ملفات الاستخراج الموثقة للصف الأول. تعتمد الألعاب على المفردات والأصوات والأنماط اللغوية المطبوعة في المصدر فقط. لا تُنشأ قواعد أو ترجمات غير موجودة في المصدر.</div>`;
}

function sectionContent(section,g,t,u){
  const titles={overview:'فهرس الوحدة ومراجعة المصدر',vocabulary:'Vocabulary · الكلمات',grammar:'Grammar · القواعد',reading:'Reading · القراءة والفهم',listening:'Listening Exam · امتحان الاستماع',practice:'Practice & Exams · التدريبات والاختبارات',games:'Play & Learn · الألعاب التعليمية'};
  if(section==='games')return gamesContent();
  const source = u?.indexSource;
  const sourcePages = source?.pdfPages?.join('، ') || 'قيد استكمال التوثيق';
  const sourceName = source?.file || 'لم يحدد مصدر بعد';
  const sourceType = source?.type === 'assessment-book' ? 'كتاب التقييمات' : source?.type === 'student-book-scope-and-sequence' ? 'كتاب الطالب – Scope and Sequence' : 'لا يوجد مرجع وحدة موثق';
  const pending = '<div class="notice"><b>لم يُنشر محتوى هذا القسم بعد.</b><p>سيُضاف فقط بعد استخراجه من الكتاب أو التقييمات والتحقق من النص والإجابة ورقم الصفحة. لن نستخدم أسئلة أو نصوصًا مؤلفة لسد النقص.</p></div>';
  const extracted = g.id === 'primary-1' ? getGradeOneUnit(u?.id) : null;
  const gradeOneContent = (kind) => {
    if (!extracted) return pending;
    if (kind === 'vocabulary') {
      const words = getUnitVocabulary(extracted);
      return words.length ? `<p class="muted">الكلمات المستخرجة من فهرس الوحدة والصفحات التي تمت مراجعتها. لا نضيف ترجمة عربية غير موجودة في المصدر.</p><div class="word-list">${words.map(item => `<div class="word-item"><b>${esc(item.word)}</b><small>${item.sourcePage ? 'PDF p. ' + item.sourcePage : 'Unit vocabulary index'}</small></div>`).join('')}</div><p class="muted">عدد الكلمات الموثقة في فهرس هذه الوحدة: ${words.length}</p>` : pending;
    }
    if (kind === 'grammar') {
      const patterns = getUnitPatterns(extracted);
      return `<div class="notice"><b>${esc(extracted.grammar?.status || 'لم يتم توثيق درس قواعد مستقل')}</b><p>${esc(extracted.grammar?.note || 'لن نحول أنماط اللغة إلى قواعد غير موجودة في الكتاب.')}</p></div>${patterns.length ? `<h3>Language patterns printed in the book</h3><div class="source-list">${patterns.map(item => `<div class="source-item"><b>${esc(item.text)}</b><small>${esc(item.lesson)} · ${item.sourcePage ? 'PDF p. ' + item.sourcePage : 'Source page under review'}</small></div>`).join('')}</div>` : ''}`;
    }
    if (kind === 'reading') {
      const readings = getUnitReading(extracted);
      return `<div class="notice"><b>${esc(extracted.reading?.status || 'No standalone reading passage identified')}</b><p>${esc(extracted.reading?.note || 'نعرض فقط نصوص القراءة المطبوعة التي تم استخراجها.')}</p></div>${readings.length ? `<div class="source-list">${readings.map(item => `<div class="source-item"><b>${esc(item.text)}</b><small>${esc(item.lesson)} · PDF p. ${item.sourcePage}</small></div>`).join('')}</div>` : '<p class="muted">لم يُعثر على قطعة قراءة مستقلة في صفحات الوحدة التي تمت مراجعتها؛ لن نؤلف قطعة بديلة.</p>'}`;
    }
    if (kind === 'listening') {
      const listening = getUnitListening(extracted);
      const dialogues = listening.dialogues.map(dialogue => `<article class="dialogue-block"><h3>${esc(dialogue.title)} <small>PDF p. ${dialogue.sourcePage}</small></h3>${dialogue.lines.map(line => `<p><b>${esc(line.speaker)}:</b> ${esc(line.text)}</p>`).join('')}</article>`).join('');
      const repeats = listening.repeatLists.map(list => `<div class="source-item"><b>${esc(list.lesson)} · PDF p. ${list.sourcePage}</b><p>${list.words.map(esc).join(' · ')}</p></div>`).join('');
      return `<div class="notice"><b>حدود مصدر الاستماع</b><p>${esc(listening.note || 'نعرض الحوارات وقوائم التكرار التي وردت في الكتاب فقط. لا ندعي وجود تسجيل صوتي أصلي عندما لا يكون مرفقًا.')}</p></div>${dialogues}${repeats ? `<h3>Listen-and-repeat word lists</h3><div class="source-list">${repeats}</div>` : ''}${dialogues || repeats ? '' : '<p class="muted">لا يوجد نص استماع قابل للاستخراج لهذه الوحدة في الصفحات التي تمت مراجعتها.</p>'}`;
    }
    return pending;
  };
  const overview = `<div class="notice"><b>الصف:</b> ${esc(g.label)} · ${esc(t.label)}<br><b>الوحدة:</b> ${u ? `Unit ${u.number}: ${esc(u.title)}` : 'لا توجد وحدة موثقة لهذا الترم'}<br><b>حالة المحتوى:</b> ${u ? 'فهرس الوحدة موثق؛ المحتوى التفصيلي قيد المراجعة.' : 'لم يُعتمد فهرس وحدات لهذا الترم بعد.'}</div>
    <div class="grid"><article><span>01</span><b>استخراج المصدر</b><small>تثبيت نص الكتاب ورقم الصفحة قبل الإدخال</small></article><article><span>02</span><b>مراجعة المحتوى</b><small>مطابقة المفردات والقواعد والإجابات مع المصدر</small></article><article><span>03</span><b>اختبار التطبيق</b><small>عدم نشر أي عنصر قبل اجتياز المراجعة</small></article></div>
    <div class="notice"><b>مرجع فهرس الوحدة:</b> ${esc(sourceType)}<br><b>الملف:</b> ${esc(sourceName)}<br><b>صفحات PDF:</b> ${esc(sourcePages)}</div>${pending}`
  const body = section === 'overview' ? overview : ['vocabulary','grammar','reading','listening'].includes(section) ? `<p>هذا القسم مخصص لـ ${titles[section]} في ${u ? esc(u.title) : 'الوحدة المحددة'}.</p>${gradeOneContent(section)}` : `<p>هذا القسم مخصص لـ ${titles[section]} في ${u ? esc(u.title) : 'الوحدة المحددة'}.</p>${pending}`;
  return `<p class="eyebrow">ENG LISH · ${esc(g.stage.toUpperCase())}</p><h2>${titles[section]}</h2>${body}`;
}
render();
