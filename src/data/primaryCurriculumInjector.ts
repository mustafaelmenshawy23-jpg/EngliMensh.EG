// =========================================================================
// EngliMensh.EG - Primary Stage Curriculum Injector
// System Architect: Mohammad El-Menshawy (محمد المنشاوي)
// Egyptian Ministry of Education (MOE) Connect & Connect Plus Syllabus
// Grades: Primary 1 to Primary 6 (Full 3-Tab Syllabus & 5-Level Exam Suite)
// =========================================================================

import {
  PrimaryLessonContent,
  PrimaryExamQuestion,
  VocabularyItem,
  PhonicsCard,
  GrammarRuleItem,
  SkillsActivity,
  registerPrimaryLesson
} from './primaryStageData.ts';
import { primaryCurriculumDatabase } from './primaryCurriculumDatabase.ts';
import { UnitCurriculum } from '../types/curriculum.ts';

// Imported primary curriculum data; source verification is tracked separately.
export const injectedPrimaryCurriculumDatabase: PrimaryLessonContent[] = primaryCurriculumDatabase;

// Helper to deterministically rotate 4 options so correct answers are balanced across A, B, C, D
function mapPrimaryQuestionToCurriculumQuestion(
  q: PrimaryExamQuestion,
  skill: 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening',
  qIndex: number,
  idPrefix: string,
  unitTitleEn: string
) {
  const hasFourOptions = Boolean(q.options && q.options.length === 4);
  const baseOptions: string[] = hasFourOptions
    ? [...q.options!]
    : [
        typeof q.correctAnswer === 'string' ? q.correctAnswer : q.options?.[0] || 'True',
        q.options?.[1] || 'False',
        q.options?.[2] || 'Not mentioned in the lesson',
        q.options?.[3] || 'None of the above'
      ];

  const correctText =
    typeof q.correctAnswer === 'string' && baseOptions.includes(q.correctAnswer)
      ? q.correctAnswer
      : baseOptions[0];

  const shift = hasFourOptions ? 0 : qIndex % 4;
  const rotated = [
    baseOptions[(0 - shift + 4) % 4],
    baseOptions[(1 - shift + 4) % 4],
    baseOptions[(2 - shift + 4) % 4],
    baseOptions[(3 - shift + 4) % 4]
  ] as [string, string, string, string];

  const newCorrectIdx = rotated.indexOf(correctText);
  const letterMap: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  return {
    id: idPrefix ? `${idPrefix}_${q.id}` : q.id,
    skill,
    question: q.questionPrompt,
    options: rotated,
    correctAnswer: letterMap[newCorrectIdx >= 0 ? newCorrectIdx : 0],
    explanation: q.explanationAr,
    explanationAr: q.explanationAr,
    verificationStatus: 'unverified' as const,
    sourceReference: `Unverified draft data — source page not yet matched: ${unitTitleEn}`
  };
}

// Bridge adapter to convert 3-Tab PrimaryLessonContent into UnitCurriculum
export function convertPrimaryLessonToUnitCurriculum(lesson: PrimaryLessonContent): UnitCurriculum {
  const gradeNum = parseInt(lesson.grade.replace('primary_', ''), 10) || 1;
  const gradeLabelMap: Record<string, string> = {
    primary_1: 'Primary 1 - الصف الأول الابتدائي',
    primary_2: 'Primary 2 - الصف الثاني الابتدائي',
    primary_3: 'Primary 3 - الصف الثالث الابتدائي',
    primary_4: 'Primary 4 - الصف الرابع الابتدائي',
    primary_5: 'Primary 5 - الصف الخامس الابتدائي',
    primary_6: 'Primary 6 - الصف السادس الابتدائي'
  };
  const seriesName = lesson.track === 'connect_plus' ? 'Connect Plus' : `Connect ${gradeNum}`;

  return {
    stage: 'Primary',
    grade: gradeNum,
    gradeLabel: gradeLabelMap[lesson.grade] || `Primary ${gradeNum}`,
    track: lesson.track === 'connect_plus' ? 'Connect Plus' : 'Connect',
    textbookSeries: seriesName,
    verificationStatus: 'unverified',
    sourceReference: `Unverified draft data — ${seriesName}, Term ${lesson.term}, Unit ${lesson.unitNumber}; awaiting page-level source check`,
    semester: lesson.term,
    unitNumber: lesson.unitNumber,
    unitTitle: lesson.unitTitleEn,
    unitTitleAr: lesson.unitTitleAr,
    theme: `${lesson.unitTitleEn} (${lesson.unitTitleAr})`,
    vocabularyModule: {
      keyWords: lesson.tab1_Vocabulary.words.map(w => ({
        word: w.word,
        pos: w.partOfSpeech,
        partOfSpeech: w.partOfSpeech,
        ar: w.arabicMeaning,
        meaningAr: w.arabicMeaning,
        def: w.arabicMeaning,
        meaningEn: `Pronounced ${w.phonetics}. Context: ${w.exampleSentence}`,
        ex: w.exampleSentence,
        exampleSentence: w.exampleSentence,
        exAr: w.arabicMeaning
      })),
      collocations: lesson.tab1_Vocabulary.conversationTerms.map(c => ({
        phrase: c.en,
        meaningAr: c.ar,
        example: c.en
      })),
      exercises: lesson.examSuite.level1_Foundation.map((q, idx) =>
        mapPrimaryQuestionToCurriculumQuestion(q, 'Vocabulary', idx, '', lesson.unitTitleEn)
      )
    },
    grammarModule: {
      ruleName: lesson.tab2_Grammar.rules[0]?.title || 'Grammar Target Rule',
      ruleNameAr: lesson.tab2_Grammar.rules[0]?.ruleExplanationAr || 'قاعدة القواعد المستهدفة',
      explanationSummary: lesson.tab2_Grammar.rules[0]?.ruleExplanationAr || '',
      detailedRules: [
        {
          title: lesson.tab2_Grammar.rules[0]?.title || 'Rule Explanation',
          explanation: lesson.tab2_Grammar.rules[0]?.ruleExplanationAr || '',
          examples: lesson.tab2_Grammar.rules[0]?.examples.map(e => `${e.en} (${e.ar})`) || []
        }
      ],
      exercises: lesson.examSuite.level3_AdvancedStructure.map((q, idx) =>
        mapPrimaryQuestionToCurriculumQuestion(q, 'Grammar', idx + 1, '', lesson.unitTitleEn)
      )
    },
    readingModule: {
      passageTitle: `${lesson.unitTitleEn} - Story & Reading (${lesson.unitTitleAr})`,
      passage: lesson.tab1_Vocabulary.words.map(w => w.exampleSentence).join(' '),
      questions: lesson.examSuite.level4_MoeMockExam.map((q, idx) =>
        mapPrimaryQuestionToCurriculumQuestion(q, 'Reading', idx + 2, '', lesson.unitTitleEn)
      )
    },
    listeningModule: {
      audioTitle: `${lesson.unitTitleEn} - Phonics & Pronunciation Track (${lesson.unitTitleAr})`,
      speakerRoles: 'Teacher & Primary Students',
      transcript: lesson.tab1_Vocabulary.conversationTerms.map(ct => `${ct.en} (${ct.ar})`).join('\n'),
      questions: lesson.examSuite.level2_Contextual.map((q, idx) =>
        mapPrimaryQuestionToCurriculumQuestion(q, 'Listening', idx + 3, '', lesson.unitTitleEn)
      ),
      exercises: lesson.examSuite.level2_Contextual.map((q, idx) =>
        mapPrimaryQuestionToCurriculumQuestion(q, 'Listening', idx + 3, 'lex', lesson.unitTitleEn)
      )
    },
    unitExam: {
      examId: `exam_${lesson.unitId}`,
      examTitle: `${lesson.unitTitleEn} - Standard MOE Unit Assessment`,
      examTitleAr: `امتحان تقييم الوحدة: ${lesson.unitTitleAr}`,
      durationMinutes: 25,
      totalMarks: 10,
      stage: 'Primary',
      questions: [
        ...lesson.examSuite.level1_Foundation,
        ...lesson.examSuite.level2_Contextual,
        ...lesson.examSuite.level3_AdvancedStructure,
        ...lesson.examSuite.level4_MoeMockExam
      ].map((q, qIndex) =>
        mapPrimaryQuestionToCurriculumQuestion(
          q,
          qIndex % 2 === 0 ? 'Vocabulary' : 'Grammar',
          qIndex,
          'exam',
          lesson.unitTitleEn
        )
      )
    }
  };
}

// Global accessor functions
export function getInjectedPrimaryUnit(
  grade: string,
  unitNumber: number,
  track: 'connect' | 'connect_plus' = 'connect',
  term: 1 | 2 = 1
): PrimaryLessonContent | undefined {
  // Exact-match only: never substitute a different unit, track, or term.
  return injectedPrimaryCurriculumDatabase.find(
    lesson =>
      lesson.grade === grade &&
      lesson.unitNumber === unitNumber &&
      lesson.track === track &&
      lesson.term === term
  );
}

export function getAllInjectedPrimaryUnits(): PrimaryLessonContent[] {
  return injectedPrimaryCurriculumDatabase;
}

// Injects all primary syllabus units into the master primary curriculum database
export function injectAllPrimaryCurriculum(): void {
  injectedPrimaryCurriculumDatabase.forEach(lesson => {
    registerPrimaryLesson(lesson);
  });
}

// Auto-register upon module load
injectAllPrimaryCurriculum();
