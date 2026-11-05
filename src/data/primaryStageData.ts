// =========================================================================
// EngliMensh.EG - Primary Stage Master Data Model & Database
// Aligned with the Egyptian Ministry of Education (Connect & Connect Plus)
// System Architect: Mohammad El-Menshawy (محمد المنشاوي)
// =========================================================================

export interface VocabularyItem {
  id: string;
  word: string;
  phonetics: string; // e.g., "/kæt/"
  arabicMeaning: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'phrase';
  exampleSentence: string;
  visualCue?: string; // Image asset or SVG icon keyword
  audioRef?: string;
}

export interface PhonicsCard {
  letterSound: string; // e.g., "Short a /æ/" or "Digraph sh /ʃ/"
  sampleWords: string[];
  rhymingPair?: [string, string];
  audioRef?: string;
}

export interface GrammarRuleItem {
  title: string;
  ruleExplanationAr: string;
  structureFormula: string; // e.g., "Subject + am/is/are + Verb-ing"
  examples: { en: string; ar: string }[];
  visualPatternBlocks?: string[]; // Visual sentence builder chunks
}

export interface SkillsActivity {
  type: 'phonics_drill' | 'guided_writing' | 'listening_comprehension' | 'dictation';
  instruction: string;
  prompt: string;
  targetResponses: string[];
  scaffoldingHints?: string[];
}

export interface PrimaryExamQuestion {
  id: string;
  type: 'mcq' | 'matching' | 'fill_in_the_blank' | 'reorder' | 'guided_sentence' | 'punctuation';
  questionPrompt: string;
  visualCue?: string;
  audioPrompt?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanationAr: string;
  marks: number;
}

export interface PrimaryLessonContent {
  unitId: string;
  unitNumber: number;
  unitTitleEn: string;
  unitTitleAr: string;
  grade: 'primary_1' | 'primary_2' | 'primary_3' | 'primary_4' | 'primary_5' | 'primary_6';
  track: 'connect' | 'connect_plus';
  term: 1 | 2;
  
  // Tab 1: Vocabulary & Phonics Visual Bank
  tab1_Vocabulary: {
    words: VocabularyItem[];
    phonics: PhonicsCard[];
    conversationTerms: { en: string; ar: string }[];
  };

  // Tab 2: Grammar & Intuitive Sentence Building
  tab2_Grammar: {
    rules: GrammarRuleItem[];
    sentenceBuilderDrills: {
      jumbledParts: string[];
      correctOrder: string[];
      translationAr: string;
    }[];
  };

  // Tab 3: Skills Builder & Early Production
  tab3_Skills: SkillsActivity[];

  // 5-Level Adaptive Exam Suite & MOE Final Test
  examSuite: {
    level1_Foundation: PrimaryExamQuestion[];       // Recognition & Visual Vocab
    level2_Contextual: PrimaryExamQuestion[];       // Sentence Completion & Matching
    level3_AdvancedStructure: PrimaryExamQuestion[];// Grammar in context & Reorder
    level4_MoeMockExam: PrimaryExamQuestion[];      // Standard Blueprint (Listening, Reading, MCQ, Writing)
    level5_HigherThinking: PrimaryExamQuestion[];   // Guided Writing, Creative Expression, Punctuation
  };
}

import { primaryCurriculumDatabase as masterDatabase } from './primaryCurriculumDatabase.ts';

// Master Primary Curriculum Database containing all 36 units across Primary 1 to 6 (Connect, Term 1)
export const primaryCurriculumDatabase: PrimaryLessonContent[] = masterDatabase;

// Helper functions for accessing primary curriculum data
export function getPrimaryLesson(
  grade: string,
  unitNumber: number,
  track: 'connect' | 'connect_plus' = 'connect',
  term: 1 | 2 = 1
): PrimaryLessonContent | undefined {
  // Exact-match only: never substitute another unit, track, or term.
  return primaryCurriculumDatabase.find(
    lesson =>
      lesson.grade === grade &&
      lesson.unitNumber === unitNumber &&
      lesson.track === track &&
      lesson.term === term
  );
}

export function getPrimaryLessonsByGrade(grade: string): PrimaryLessonContent[] {
  return primaryCurriculumDatabase.filter(lesson => lesson.grade === grade);
}

export function registerPrimaryLesson(lesson: PrimaryLessonContent): void {
  const existingIndex = primaryCurriculumDatabase.findIndex(l => l.unitId === lesson.unitId);
  if (existingIndex >= 0) {
    primaryCurriculumDatabase[existingIndex] = lesson;
  } else {
    primaryCurriculumDatabase.push(lesson);
  }
}

export function getAllPrimaryLessons(): PrimaryLessonContent[] {
  return primaryCurriculumDatabase;
}
