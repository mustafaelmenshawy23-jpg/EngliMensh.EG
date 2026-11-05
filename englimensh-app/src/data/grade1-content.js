import u1 from './source-audit/grade1-unit1-full-extraction.json';
import u2 from './source-audit/grade1-unit2-full-extraction.json';
import u3 from './source-audit/grade1-unit3-full-extraction.json';
import u4 from './source-audit/grade1-unit4-full-extraction.json';
import u5 from './source-audit/grade1-unit5-full-extraction.json';
import u6 from './source-audit/grade1-unit6-full-extraction.json';

const units = [u1, u2, u3, u4, u5, u6];

export function getGradeOneUnit(unitId) {
  const number = Number(String(unitId || '').replace('unit-', ''));
  return units.find(unit => unit.unit === number) || null;
}

export function getUnitVocabulary(unit) {
  if (!unit) return [];
  const pages = new Map();
  for (const lesson of unit.lessons || []) {
    for (const item of [...(lesson.vocabulary || []), ...(lesson.sourceWords || [])]) {
      const word = typeof item === 'string' ? item : item.word;
      if (word && !pages.has(word.toLowerCase())) pages.set(word.toLowerCase(), item.sourcePage || lesson.sourcePages?.[0] || null);
    }
  }
  return (unit.unitVocabularyIndex || []).map(word => ({
    word,
    sourcePage: pages.get(String(word).toLowerCase()) || null
  }));
}

export function getUnitPatterns(unit) {
  if (!unit) return [];
  const seen = new Set();
  return (unit.lessons || []).flatMap(lesson =>
    (lesson.languagePatterns || []).map(text => ({
      text,
      lesson: lesson.title,
      sourcePage: lesson.sourcePages?.[0] || null
    }))
  ).filter(item => {
    const key = item.text.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getUnitReading(unit) {
  if (!unit) return [];
  return (unit.lessons || []).flatMap(lesson =>
    (lesson.reading?.texts || []).map(item => ({
      ...item,
      lesson: lesson.title
    }))
  );
}

export function getUnitListening(unit) {
  if (!unit) return { dialogues: [], repeatLists: [], note: '' };
  const dialogues = (unit.lessons || []).filter(lesson => lesson.dialogue?.lines?.length).map(lesson => ({
    title: lesson.title,
    sourcePage: lesson.dialogue.sourcePage,
    lines: lesson.dialogue.lines
  }));
  const repeatLists = (unit.lessons || []).flatMap(lesson =>
    (lesson.teacherRepeatAudioText || []).map(item => ({
      lesson: lesson.title,
      sourcePage: item.sourcePage,
      words: item.words || []
    }))
  );
  return { dialogues, repeatLists, note: unit.listening?.note || '' };
}
