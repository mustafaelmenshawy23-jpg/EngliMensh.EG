import u1 from './data/source-audit/grade1-unit1-full-extraction.json';
import u2 from './data/source-audit/grade1-unit2-full-extraction.json';
import u3 from './data/source-audit/grade1-unit3-full-extraction.json';
import u4 from './data/source-audit/grade1-unit4-full-extraction.json';
import u5 from './data/source-audit/grade1-unit5-full-extraction.json';
import u6 from './data/source-audit/grade1-unit6-full-extraction.json';

const gradeOneSources=[u1,u2,u3,u4,u5,u6];
export const gameCatalog=[
  {id:'penalty',title:'Penalty Kick',type:'phonics',solo:true},
  {id:'fishing',title:'Fishing Hunt',type:'listening-vocabulary',solo:true}
];

function wordsForUnit(unitId){
  const source=gradeOneSources.find(x=>x.unit===Number(String(unitId).replace('unit-','')));
  if(!source)return [];
  const words=source.unitVocabularyIndex || source.lessons.flatMap(lesson=>[
    ...(lesson.vocabulary||[]).map(x=>typeof x==='string'?x:x.word),
    ...(lesson.sourceWords||[]).map(x=>typeof x==='string'?x:x.word),
    ...(lesson.numberVocabulary||[])
  ]);
  return [...new Set(words.map(w=>String(w||'').trim()).filter(w=>/^[a-z]+(?:[ '-][a-z]+)*$/i.test(w)))];
}
function phonicsForUnit(unitId){
  const source=gradeOneSources.find(x=>x.unit===Number(String(unitId).replace('unit-','')));
  if(!source)return [];
  return source.lessons.flatMap(lesson=>{
    const targets=[...(lesson.phonicsTarget?[lesson.phonicsTarget]:[]),...(lesson.phonicsTargets||[])];
    return targets.map(t=>({letter:String(t.letter||'').charAt(0).toLowerCase(),sound:t.sound||'',page:t.sourcePage||t.sourcePages?.[0]||lesson.sourcePages?.[0]}));
  }).filter(x=>x.letter);
}
function shuffle(list){return [...list].sort(()=>Math.random()-.5);}
function makeQuestion(gameId, words, phonics, index){
  if(gameId==='penalty'){
    const target=phonics[index%phonics.length];
    const matching=words.filter(w=>w.toLowerCase().startsWith(target.letter));
    const distractors=shuffle(words.filter(w=>!w.toLowerCase().startsWith(target.letter))).slice(0,3);
    const choices=shuffle([...matching.slice(0,1),...distractors]);
    const correctIndex=choices.indexOf(matching[0]);
    return {prompt:`Choose the word that starts with the letter ${target.letter.toUpperCase()}.`,choices,correctIndex,sourcePage:target.page};
  }
  const spokenWord=words[index%words.length];
  const choices=shuffle([spokenWord,...shuffle(words.filter(w=>w!==spokenWord)).slice(0,3)]);
  return {prompt:'Listen carefully. Which word did you hear?',spokenWord,choices,correctIndex:choices.indexOf(spokenWord)};
}
export function createRound(gameId,gradeId,unitId,count=10){
  if(gradeId!=='primary-1')return [];
  const words=wordsForUnit(unitId), phonics=phonicsForUnit(unitId);
  if(words.length<4)return [];
  const questions=[];
  if(gameId==='penalty'&&phonics.length){
    for(let i=0;i<count;i++){
      const target=phonics[i%phonics.length];
      const hasMatch=words.some(w=>w.toLowerCase().startsWith(target.letter));
      if(hasMatch)questions.push(makeQuestion(gameId,words,phonics,i));
    }
  }else if(gameId==='fishing'){
    for(let i=0;i<count;i++)questions.push(makeQuestion(gameId,words,phonics,i));
  }
  return questions;
}
export function getGameQuestion(question){return question||null;}
