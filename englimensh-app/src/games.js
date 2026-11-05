import u1 from './data/source-audit/grade1-unit1-full-extraction.json';
import u2 from './data/source-audit/grade1-unit2-full-extraction.json';
import u3 from './data/source-audit/grade1-unit3-full-extraction.json';
import u4 from './data/source-audit/grade1-unit4-full-extraction.json';
import u5 from './data/source-audit/grade1-unit5-full-extraction.json';
import u6 from './data/source-audit/grade1-unit6-full-extraction.json';

const gradeOneSources=[u1,u2,u3,u4,u5,u6];
export const gameCatalog=[
 {id:'penalty',title:'Penalty Kick',subtitle:'اختر التهجئة الصحيحة من كلمات الوحدة وسجّل هدفًا',icon:'⚽',theme:'football'},
 {id:'fishing',title:'Fishing Hunt',subtitle:'استمع واصطد الكلمة الصحيحة',icon:'🎣',theme:'water'},
 {id:'basketball',title:'Basketball Challenge',subtitle:'أكمل النمط اللغوي وسجّل سلة',icon:'🏀',theme:'court'},
 {id:'builder',title:'Word Builder',subtitle:'رتّب الحروف لتكوين كلمة المنهج',icon:'🧩',theme:'builder'},
 {id:'adventure',title:'Grammar Adventure',subtitle:'تقدّم في المسار باختيار الكلمة المناسبة',icon:'🗺️',theme:'adventure'},
 {id:'shoot',title:'Shoot the Answer',subtitle:'صوّب نحو الكلمة الصحيحة',icon:'🎯',theme:'target'}
];
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
const unitFor=id=>gradeOneSources.find(x=>x.unit===Number(String(id).replace('unit-','')));
function sourceWords(source){
 const entries=source.lessons.flatMap(l=>[...(l.vocabulary||[]),...(l.sourceWords||[])]);
 const extra=(source.unitVocabularyIndex||[]).map(x=>typeof x==='string'?{word:x}:x);
 const seen=new Set();
 return [...entries,...extra].map(x=>typeof x==='string'?{word:x}:x)
  .filter(x=>x.word && /^[a-z]+(?:[ '-][a-z]+)*$/i.test(x.word))
  .filter(x=>{const k=x.word.toLowerCase();if(seen.has(k))return false;seen.add(k);return true;});
}
function phonics(source){
 return source.lessons.flatMap(l=>[...(l.phonicsTarget?[l.phonicsTarget]:[]),...(l.phonicsTargets||[])])
  .map(x=>({letter:String(x.letter||'').charAt(0).toLowerCase(),sound:x.sound||'',page:x.sourcePage||x.sourcePages?.[0]}))
  .filter(x=>x.letter);
}
function patterns(source){
 return source.lessons.flatMap(l=>(l.languagePatterns||[]).map(p=>({text:p,page:l.sourcePages?.[0]})));
}
function mcq(prompt,answer,pool,extra={}){
 const distractors=shuffle(pool.filter(x=>x.toLowerCase()!==answer.toLowerCase())).slice(0,3);
 const choices=shuffle([answer,...distractors]);
 return {prompt,choices,correctIndex:choices.indexOf(answer),...extra};
}
function scrambled(word){
 const chars=[...word.toLowerCase().replace(/[^a-z]/g,'')];
 if(chars.length<2)return word;
 let out=chars.join('');
 for(let n=0;n<8&&out===chars.join('');n++)out=shuffle(chars).join('');
 return out;
}
function spellingChoices(word){
 const answer=word.toLowerCase();
 const variants=new Set();
 for(let attempt=0;attempt<40&&variants.size<3;attempt++){
  const candidate=scrambled(answer);
  if(candidate!==answer)variants.add(candidate);
 }
 return shuffle([answer,...variants]);
}
function makeQuestions(id,source,words,count){
 const names=words.map(x=>x.word), pats=patterns(source), qs=[];
 if(id==='penalty'||id==='shoot'){
  for(const w of shuffle(words).slice(0,count)){
   const choices=spellingChoices(w.word);
   qs.push({prompt:'Choose the correctly spelled word from this unit.',choices,correctIndex:choices.indexOf(w.word.toLowerCase()),sourcePage:w.sourcePage,kind:'vocabulary'});
  }
 }
 if(id==='fishing'){
  for(const w of shuffle(words).slice(0,count)){
   qs.push(mcq('Listen carefully. Which word did you hear?',w.word,names,{spokenWord:w.word,sourcePage:w.sourcePage,kind:'vocabulary-listening'}));
  }
 }
 if(id==='basketball'||id==='adventure'){
  const grammarWords=new Set(['am','is','are','have','has','can','in','on','under','there','do','does','this','that','my','your','i','you','he','she','it','we','they']);
  const gaps=[];
  for(const p of pats){
   const tokens=p.text.split(' ');
   tokens.forEach((token,index)=>{
    const clean=token.toLowerCase().replace(/[^a-z']/g,'');
    if(grammarWords.has(clean)&&clean.length>1){
     const blank=[...tokens];blank[index]='_____';
     gaps.push({prompt:(id==='basketball'?'Complete the sentence and score! ':'Choose the missing word! ')+blank.join(' '),answer:token.replace(/[.!?,]$/,''),page:p.page});
    }
   });
  }
  const allAnswers=[...new Set(gaps.map(x=>x.answer.toLowerCase()))];
  for(const gap of shuffle(gaps).slice(0,count)){
   const distractors=shuffle(allAnswers.filter(x=>x!==gap.answer.toLowerCase())).slice(0,3);
   const choices=shuffle([gap.answer,...distractors]);
   qs.push({prompt:gap.prompt,choices,correctIndex:choices.findIndex(x=>x.toLowerCase()===gap.answer.toLowerCase()),sourcePage:gap.page,kind:'grammar-pattern'});
  }
 }
 if(id==='builder'){
  for(const w of shuffle(words).slice(0,count)){
   const choices=spellingChoices(w.word);
   qs.push({prompt:'Choose the correctly spelled unit word.',spokenWord:w.word,choices,correctIndex:choices.indexOf(w.word.toLowerCase()),kind:'vocabulary-spelling',sourceWord:w.word,sourcePage:w.sourcePage});
  }
 }
 return shuffle(qs).slice(0,count);
}
export function createRound(gameId,gradeId,unitId,count=10){
 if(gradeId!=='primary-1')return [];
 const source=unitFor(unitId);if(!source)return [];
 const words=sourceWords(source);if(words.length<4)return [];
 if((gameId==='basketball'||gameId==='adventure')&&!patterns(source).length)return [];
 return makeQuestions(gameId,source,words,count);
}
export function getGameQuestion(question){return question||null;}
