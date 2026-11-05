import u1 from './data/source-audit/grade1-unit1-full-extraction.json';
import u2 from './data/source-audit/grade1-unit2-full-extraction.json';
import u3 from './data/source-audit/grade1-unit3-full-extraction.json';
import u4 from './data/source-audit/grade1-unit4-full-extraction.json';
import u5 from './data/source-audit/grade1-unit5-full-extraction.json';
import u6 from './data/source-audit/grade1-unit6-full-extraction.json';

const gradeOneSources=[u1,u2,u3,u4,u5,u6];
export const gameCatalog=[
 {id:'penalty',title:'Penalty Kick',subtitle:'اختر الكلمة الصحيحة وسجّل هدفًا',icon:'⚽',theme:'football'},
 {id:'fishing',title:'Fishing Hunt',subtitle:'استمع واصطد الكلمة الصحيحة',icon:'🎣',theme:'water'},
 {id:'basketball',title:'Basketball Challenge',subtitle:'أكمل النمط اللغوي وسجّل سلة',icon:'🏀',theme:'court'},
 {id:'builder',title:'Word Builder',subtitle:'رتّب الحروف لتكوين كلمة المنهج',icon:'🧩',theme:'builder'},
 {id:'adventure',title:'Grammar Adventure',subtitle:'تقدّم في المسار باختيار الكلمة المناسبة',icon:'🗺️',theme:'adventure'},
 {id:'shoot',title:'Shoot the Answer',subtitle:'صوّب نحو الإجابة الصحيحة',icon:'🎯',theme:'target'}
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
function makeQuestions(id,source,words,count){
 const names=words.map(x=>x.word), phon=phonics(source), pats=patterns(source), qs=[];
 if(id==='penalty'){
  for(let i=0;i<Math.min(count,phon.length);i++){const p=phon[i];const answer=names.find(w=>w.toLowerCase().startsWith(p.letter));if(answer)qs.push(mcq('Choose the word that starts with '+p.letter.toUpperCase()+'.',answer,names,{sourcePage:p.page,kind:'phonics'}));}
 }
 if(id==='fishing'){
  for(let i=0;i<Math.min(count,words.length);i++){const w=words[i];qs.push(mcq('Listen carefully. Which word did you hear?',w.word,names,{spokenWord:w.word,sourcePage:w.sourcePage,kind:'listening'}));}
 }
 if(id==='basketball'||id==='adventure'){
  const usable=pats.filter(p=>p.text.split(' ').length>=3);
  for(const p of shuffle(usable).slice(0,count)){
   const tokens=p.text.split(' '), candidates=tokens.filter(x=>/^[A-Za-z']+[.!?,]?$/.test(x)&&x.length>2);
   const target=candidates[candidates.length-1];if(!target)continue;
   const answer=target.replace(/[.!?,]$/,'');
   const blank=p.text.replace(new RegExp('\\b'+answer.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i'),'_____');
   qs.push(mcq((id==='basketball'?'Complete the sentence and score! ':'Choose the missing word on your adventure! ')+blank,answer,names,{sourcePage:p.page,kind:'pattern',originalPattern:p.text}));
  }
 }
 if(id==='builder'){
  for(let i=0;i<Math.min(count,words.length);i++){const w=words[i].word;const correct=scrambled(w);const variants=new Set([correct]);while(variants.size<Math.min(4,Math.max(2,w.length)))variants.add(scrambled(w));const options=shuffle([...variants]);qs.push({prompt:'Build the word: listen to the word, then choose its correct letter order.',spokenWord:w,choices:options,correctIndex:options.indexOf(correct),kind:'builder',sourceWord:w});}
 }
 if(id==='shoot'){
  const translated=words.filter(w=>w.arabicMeaning);
  if(translated.length>=2){for(let i=0;i<Math.min(count,translated.length);i++){const w=translated[i];qs.push(mcq('Shoot the English word for: '+w.arabicMeaning,w.word,translated.map(x=>x.word),{sourcePage:w.sourcePage,kind:'meaning'}));}}
  else if(phon.length){for(let i=0;i<Math.min(count,phon.length);i++){const p=phon[i],answer=names.find(w=>w.toLowerCase().startsWith(p.letter));if(answer)qs.push(mcq('Hit the word that begins with the sound '+p.sound+'.',answer,names,{sourcePage:p.page,kind:'phonics'}));}}
 }
 return shuffle(qs).slice(0,count);
}
export function createRound(gameId,gradeId,unitId,count=10){
 if(gradeId!=='primary-1')return [];
 const source=unitFor(unitId);if(!source)return [];
 const words=sourceWords(source);if(words.length<4)return [];
 const phon=phonics(source);
 if((gameId==='penalty'||gameId==='shoot')&&!phon.length&&!words.some(w=>w.arabicMeaning))return [];
 if((gameId==='basketball'||gameId==='adventure')&&!patterns(source).length)return [];
 return makeQuestions(gameId,source,words,count);
}
export function getGameQuestion(question){return question||null;}
