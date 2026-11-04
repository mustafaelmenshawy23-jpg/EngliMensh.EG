import curriculum from './data/curriculum.json';
import './style.css';

const app = document.querySelector('#app');
let selectedGrade = curriculum.grades[0].id;
let selectedTerm = 'term-1';
let selectedUnitId = 'unit-1';
let activeSection = 'overview';

const sections = [
  ['overview','نظرة عامة'],['vocabulary','الكلمات'],['grammar','القواعد'],
  ['reading','القراءة والفهم'],['listening','الاستماع'],['practice','التدريبات والاختبارات']
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
      <section class="card content">
        ${sectionContent(activeSection,g,t,u)}
      </section>
      <footer>إنجليمنش © · كل محتوى تعليمي وأسئلة مرتبط بمصدر وصفحة بعد المراجعة</footer>
    </main>`;
  app.querySelector('#grade').addEventListener('change',e=>{
    selectedGrade=e.target.value; selectedTerm='term-1';
    selectedUnitId=grade().unitIndex?.[0]?.id || ''; render();
  });
  app.querySelector('#term').addEventListener('change',e=>{selectedTerm=e.target.value;render()});
  app.querySelector('#unit')?.addEventListener('change',e=>{selectedUnitId=e.target.value;render()});
  app.querySelectorAll('[data-section]').forEach(b=>b.addEventListener('click',()=>{activeSection=b.dataset.section;render()}));
}
function sectionContent(section,g,t,u){
  const titles={overview:'فهرس الوحدة ومراجعة المصدر',vocabulary:'Vocabulary · الكلمات',grammar:'Grammar · القواعد',reading:'Reading · القراءة والفهم',listening:'Listening Exam · امتحان الاستماع',practice:'Practice & Exams · التدريبات والاختبارات'};
  const source = u?.indexSource;
  const sourcePages = source?.pdfPages?.join('، ') || 'قيد استكمال التوثيق';
  const sourceName = source?.file || 'لم يحدد مصدر بعد';
  const sourceType = source?.type === 'assessment-book' ? 'كتاب التقييمات' : 'كتاب الطالب – Scope and Sequence';
  const pending = '<div class="notice"><b>لم يُنشر محتوى هذا القسم بعد.</b><p>سيُضاف فقط بعد استخراجه من الكتاب أو التقييمات والتحقق من النص والإجابة ورقم الصفحة. لن نستخدم أسئلة أو نصوصًا مؤلفة لسد النقص.</p></div>';
  const overview = `
    <div class="notice"><b>الصف:</b> ${esc(g.label)} · ${esc(t.label)}<br><b>الوحدة:</b> ${u ? `Unit ${u.number}: ${esc(u.title)}` : 'لا توجد وحدة موثقة'}<br><b>حالة الفهرسة:</b> اسم الوحدة موثق؛ المحتوى التفصيلي قيد المراجعة.</div>
    <div class="grid"><article><span>30+</span><b>كلمة لكل وحدة</b><small>معنى عربي + شرح إنجليزي + مثال</small></article><article><span>MCQ</span><b>تدريبات واختبارات</b><small>مع تصحيح ونتيجة بعد توثيق الأسئلة</small></article><article><span>5</span><b>أقسام تعليمية</b><small>Vocabulary · Grammar · Reading · Listening · Practice</small></article></div>
    <div class="notice"><b>مرجع فهرس الوحدة:</b> ${esc(sourceType)}<br><b>الملف:</b> ${esc(sourceName)}<br><b>صفحات PDF:</b> ${esc(sourcePages)}</div>
    ${pending}`;
  const body = section === 'overview' ? overview : `<p>هذا القسم مخصص لـ ${titles[section]} في ${u ? esc(u.title) : 'الوحدة المحددة'}.</p>${pending}`;
  return `<p class="eyebrow">ENG LISH · ${esc(g.stage.toUpperCase())}</p><h2>${titles[section]}</h2>${body}`;
}
render();
