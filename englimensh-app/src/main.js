import curriculum from './data/curriculum.json';
import './style.css';

const app = document.querySelector('#app');
let selectedGrade = curriculum.grades[0].id;
let selectedTerm = 'term-1';
let activeSection = 'overview';
let selectedAnswer = null;

const sections = [
  ['overview','نظرة عامة'],['vocabulary','الكلمات'],['grammar','القواعد'],
  ['reading','القراءة والفهم'],['listening','الاستماع'],['practice','الاختبارات']
];
const esc = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const grade = () => curriculum.grades.find(g => g.id === selectedGrade);
const term = () => grade().terms.find(t => t.id === selectedTerm);
function render(){
  const g=grade(), t=term();
  app.innerHTML = `
    <header class="topbar"><div class="brand"><div class="mark">E</div><div><strong>إنجليمنش</strong><small>EngliMensh · English, step by step</small></div></div><span class="tag">المناهج المصرية</span></header>
    <main>
      <section class="hero"><div><p class="eyebrow">LEARN · PRACTICE · ACHIEVE</p><h1>الإنجليزي… خطوة بخطوة</h1><p>من أولى ابتدائي إلى ثالثة ثانوي، بنظامي الثانوية العامة والبكالوريا المصرية.</p></div><div class="hero-art" aria-hidden="true">Aa</div></section>
      <section class="selector card">
        <label>اختار الصف<select id="grade">${curriculum.grades.map(x=>`<option value="${x.id}" ${x.id===selectedGrade?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label>
        <label>اختار الترم<select id="term">${g.terms.map(x=>`<option value="${x.id}" ${x.id===selectedTerm?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label>
        <label>الوحدة<select id="unit" disabled><option>سيتم إضافة الوحدات بعد استيراد الكتب ومراجعتها</option></select></label>
      </section>
      <nav class="tabs" aria-label="أقسام الوحدة">${sections.map(([id,label])=>`<button data-section="${id}" class="${activeSection===id?'active':''}">${label}</button>`).join('')}</nav>
      <section class="card content">
        ${sectionContent(activeSection,g,t)}
      </section>
      <footer>إنجليمنش © · محتوى مطابق للكتاب بعد المراجعة والتوثيق</footer>
    </main>`;
  app.querySelector('#grade').addEventListener('change',e=>{selectedGrade=e.target.value;selectedTerm='term-1';render()});
  app.querySelector('#term').addEventListener('change',e=>{selectedTerm=e.target.value;render()});
  app.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>{activeSection=b.dataset.section;selectedAnswer=null;render()}));
}
function sectionContent(section,g,t){
  const titles={overview:'ابدأ رحلتك',vocabulary:'أهم كلمات الوحدة',grammar:'Grammar · القواعد',reading:'Reading · القراءة والفهم',listening:'Listening Exam · امتحان الاستماع',practice:'اختبر نفسك'};
  const empty='محتوى هذا القسم سيُضاف من كتاب الطالب بعد استخراجه ومراجعته صفحة بصفحة. لن نضع نصوصًا أو إجابات من عندنا وننسبها للكتاب.';
  const details={
    overview:`<div class="notice"><b>الصف المحدد:</b> ${esc(g.label)} · ${esc(t.label)}</div><div class="grid"><article><span>30+</span><b>كلمة لكل وحدة</b><small>معنى عربي + شرح إنجليزي + مثال</small></article><article><span>MCQ</span><b>تدريبات واختبارات</b><small>أسئلة اختيار من متعدد وتصحيح فوري</small></article><article><span>4</span><b>مهارات أساسية</b><small>Vocabulary · Grammar · Reading · Listening</small></article></div><p class="muted">${empty}</p>`,
    vocabulary:`<p>كل كلمة ستحتوي على معناها بالعربية، وشرح بسيط بالإنجليزية، ومثال واضح.</p><div class="notice">${empty}</div>`,
    grammar:`<p>شرح متدرج من الأساسيات إلى القواعد الأكثر تقدمًا، حسب مستوى الصف وتسلسل الكتاب.</p><div class="notice">${empty}</div>`,
    reading:`<p>قطعة القراءة الأساسية في الوحدة، يليها أسئلة فهم MCQ.</p><div class="notice">${empty}</div>`,
    listening:`<p>نص الاستماع الأساسي في الوحدة، مع أسئلة امتحان MCQ.</p><div class="notice">${empty}</div>`,
    practice:`<p>اختبارات منفصلة للكلمات والقواعد والقراءة والاستماع، كلها اختيار من متعدد.</p><div class="notice">${empty}</div>`
  };
  return `<p class="eyebrow">ENG LISH · ${esc(g.stage.toUpperCase())}</p><h2>${titles[section]}</h2>${details[section]}`;
}
render();
