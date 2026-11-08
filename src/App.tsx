import React, { useState, useEffect, useRef } from 'react';
import {
  allUnits,
  getExamById,
  governmentalExams,
  term1RevisionExams,
  term2RevisionExams,
  getExamsUnits,
  getExamsHeaderMeta,
  findAnyExamAcrossAllGrades
} from './data/allUnits.ts';
import { Exam, ExamLevel, StudentProgress, EssayEvaluation, StoryEvaluation } from './types.ts';
import {
  gradeEssayWithAI,
  gradeStoryWithAI,
  gradeResearchWithAI,
  ResearchEvaluation,
} from './services/aiGrader.ts';
import {
  BookOpen, Award, CheckCircle2, XCircle, Clock,
  Sparkles, RotateCcw,
  Printer, ArrowLeft, ArrowRight,
  MessageCircle, User,
  QrCode, Lightbulb,
  GraduationCap, ShieldCheck, Unlock, Lock, Building2, Calendar
} from 'lucide-react';
import { MainAppTab, StudentProfile, ExamHistoryRecord } from './types.ts';
import { getStoredStudent, recordExamCompletion, clearStudentSession } from './services/studentStorage.ts';
import { syncExamResultToCloud, sendExamResult, CloudSyncPayload } from './services/cloudSync.ts';
import { speakText, stopSpeaking } from './utils/speechService.ts';
import {
  initGlobalBackNavigationListener,
  syncNavigationStateToHistory,
  registerBackNavigationHandler,
} from './utils/navigationHistory.ts';
import { isPackagedMobileEnvironment } from './config/apiConfig.ts';
import { usePWAInstall } from './hooks/usePWAInstall.ts';
import { InstallAppModal } from './components/InstallAppModal.tsx';
import { ShareModal } from './components/ShareModal.tsx';
import { BottomNavBar } from './components/BottomNavBar.tsx';
import { HomeView } from './components/HomeView.tsx';
import { GamesArena } from './components/games/GamesArena.tsx';
import { LeaderboardView } from './components/LeaderboardView.tsx';
import { StudentProfileView } from './components/StudentProfileView.tsx';
import { DictionaryView } from './components/dictionary/DictionaryView.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { StudentRegistrationModal } from './components/StudentRegistrationModal.tsx';
import { EngliMenshLogo } from './components/EngliMenshLogo.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { QuestionCard } from './components/QuestionCard.tsx';
import { ReadingComprehensionSplitView } from './components/ReadingComprehensionSplitView.tsx';
import { HeroCover } from './components/HeroCover.tsx';

import { CurriculumExplorer } from './components/CurriculumExplorer.tsx';
import { LessonViewerModal } from './components/LessonViewerModal.tsx';
import { ExamsHub } from './components/ExamsHub.tsx';
import { EducationalStage, SecondaryTrackPath, UnitCurriculum } from './types/curriculum.ts';
import { allBaccalaureateExams, getBaccalaureateExamsByGrade } from './data/baccalaureateExams.ts';
import { allCurriculaUnits } from './data/masterCurriculumDatabase.ts';
import { allSecondaryGeneralUnits } from './data/secondaryCurriculumFullTerm1.ts';
import { AppHeader } from './components/AppHeader.tsx';
import { HomeScreen } from './screens/HomeScreen.tsx';
import { CurriculaScreen } from './screens/CurriculaScreen.tsx';
import { GamesScreen } from './screens/GamesScreen.tsx';
import { SmartToolsScreen } from './screens/SmartToolsScreen.tsx';
import { ProfileScreen } from './screens/ProfileScreen.tsx';
import { ArcadeGameType } from './types/gameQuestions.ts';

const LEGACY_PROGRESS_KEY = 'egypt_moe_student_progress_v2';
const SCOPED_PROGRESS_KEY = 'egypt_moe_student_progress_v3';

const initialProgress: StudentProgress = {
  1: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } },
  2: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } },
  3: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } },
  4: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } },
  5: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } },
  6: { 1: { unlocked: true, completed: false, bestScore: 0, percentage: 0 }, 2: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 3: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 4: { unlocked: false, completed: false, bestScore: 0, percentage: 0 }, 5: { unlocked: false, completed: false, bestScore: 0, percentage: 0 } }
};

function loadScopedProgressMap(): Record<string, StudentProgress> {
  try {
    const rawV3 = localStorage.getItem(SCOPED_PROGRESS_KEY);
    if (rawV3) {
      const parsed = JSON.parse(rawV3);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
    const rawV2 = localStorage.getItem(LEGACY_PROGRESS_KEY);
    if (rawV2) {
      const legacyParsed = JSON.parse(rawV2);
      if (legacyParsed && typeof legacyParsed === 'object') {
        const migrated = { general_g10: legacyParsed };
        localStorage.setItem(SCOPED_PROGRESS_KEY, JSON.stringify(migrated));
        return migrated;
      }
    }
  } catch {
    // Ignore storage parse error
  }
  return { general_g10: initialProgress };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'levels' | 'governmental' | 'term1' | 'term2'>('levels');
  const [selectedUnitId, setSelectedUnitId] = useState<number>(1);
  const [selectedLevel, setSelectedLevel] = useState<ExamLevel>(1);
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [examState, setExamState] = useState<'lobby' | 'taking' | 'evaluating' | 'result' | 'review'>('lobby');

  // Answers state
  const [mcqAnswers, setMcqAnswers] = useState<{ [qId: string]: number[] }>({});
  const [storyAnswers, setStoryAnswers] = useState<{ [qId: string]: string }>({});
  const [essayAnswer, setEssayAnswer] = useState<string>('');
  const [researchAnswer, setResearchAnswer] = useState<string>('');
  const [translationAnswers, setTranslationAnswers] = useState<{ [qId: string]: number }>({});
  const [openStoryHints, setOpenStoryHints] = useState<{ [qId: string]: boolean }>({});

  // Grading results
  const [mcqScore, setMcqScore] = useState<number>(0);
  const [storyEvaluations, setStoryEvaluations] = useState<{ [qId: string]: StoryEvaluation }>({});
  const [essayEvaluation, setEssayEvaluation] = useState<EssayEvaluation | null>(null);
  const [researchEvaluation, setResearchEvaluation] = useState<ResearchEvaluation | null>(null);
  const [totalEarned, setTotalEarned] = useState<number>(0);
  const [totalMax, setTotalMax] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  // Timer & Submission Lock
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const timerRef = useRef<any>(null);
  const isSubmittingExamRef = useRef<boolean>(false);

  // In-App Exam Confirmation Modals (replaces blocking window.confirm)
  const [showSubmitConfirmModal, setShowSubmitConfirmModal] = useState<boolean>(false);
  const [showExitExamConfirmModal, setShowExitExamConfirmModal] = useState<boolean>(false);

  // Print mode
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);

  // Main App Navigation Tab ('home' | 'curricula' | 'exams' | 'games' | 'leaderboard' | 'profile' | 'teacher' | 'tools')
  const [currentAppTab, setCurrentAppTab] = useState<MainAppTab>('home');
  const [curriculumStage, setCurriculumStage] = useState<EducationalStage>('Secondary');
  const [curriculumGrade, setCurriculumGrade] = useState<number>(10);
  const [curriculumSecondaryPath, setCurriculumSecondaryPath] = useState<SecondaryTrackPath>('general_secondary');
  const [launchedGame, setLaunchedGame] = useState<ArcadeGameType | null>(null);

  // Examination Pathways (General Secondary vs Egyptian Baccalaureate 2026/2027)
  const [examSecondaryPath, setExamSecondaryPath] = useState<'general' | 'baccalaureate'>('general');
  const [examGrade, setExamGrade] = useState<number>(10);

  // Student progress scoped by track + grade (so Unit 1 in Grade 10 never unlocks Unit 1 in Grade 11/12/Baccalaureate)
  const [progressByScope, setProgressByScope] = useState<Record<string, StudentProgress>>(() =>
    loadScopedProgressMap()
  );
  const currentProgressScopeKey = `${examSecondaryPath}_g${examGrade}`;
  const progress: StudentProgress = progressByScope[currentProgressScopeKey] || initialProgress;

  // Persistent Student Profile (Auto-Login with zero repeated login on revisit)
  const [student, setStudent] = useState<StudentProfile | null>(() => getStoredStudent());
  const [studentName, setStudentName] = useState<string>(() => student?.name || localStorage.getItem('englimensh_student_name') || 'طالب جديد');
  const [studentGroup, setStudentGroup] = useState<string>(() => student?.group || localStorage.getItem('englimensh_student_group') || 'General');
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState<boolean>(false);
  const [pendingExam, setPendingExam] = useState<Exam | null>(null);
  const [regError, setRegError] = useState<string>('');
  const [, setHeaderRefreshTick] = useState<number>(0);

  // Certificate Modal State
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [certificateData, setCertificateData] = useState<{
    studentName: string;
    studentSchool: string;
    studentGrade: string;
    examTitle: string;
    score: number;
    maxMarks: number;
    percentage: number;
    dateStr: string;
  }>({
    studentName: '',
    studentSchool: '',
    studentGrade: '',
    examTitle: '',
    score: 0,
    maxMarks: 0,
    percentage: 0,
    dateStr: '',
  });

  // Active section tab in taking exam
  const [activeSectionTab, setActiveSectionTab] = useState<'mcq' | 'reading' | 'translation' | 'story' | 'writing' | 'research'>('mcq');

  // PWA Install state
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showInstallModal, setShowInstallModal] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [shareCustomText, setShareCustomText] = useState<string>('');

  const saveProgress = (newProgress: StudentProgress, scopeKeyOverride?: string) => {
    const targetScope = scopeKeyOverride || currentProgressScopeKey;
    setProgressByScope((prev) => {
      const updatedMap = { ...prev, [targetScope]: newProgress };
      try {
        localStorage.setItem(SCOPED_PROGRESS_KEY, JSON.stringify(updatedMap));
        if (targetScope === 'general_g10') {
          localStorage.setItem(LEGACY_PROGRESS_KEY, JSON.stringify(newProgress));
        }
      } catch {
        // Ignore storage quota errors
      }
      return updatedMap;
    });
  };

  // Timer effect
  useEffect(() => {
    if (examState === 'taking' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [examState, timeLeft]);

  const executeStartExam = (exam: Exam) => {
    isSubmittingExamRef.current = false;
    setShowSubmitConfirmModal(false);
    setShowExitExamConfirmModal(false);
    setActiveExam(exam);
    setMcqAnswers({});
    setStoryAnswers({});
    setEssayAnswer('');
    setResearchAnswer('');
    setTranslationAnswers({});
    setStoryEvaluations({});
    setEssayEvaluation(null);
    setResearchEvaluation(null);
    setActiveSectionTab('mcq');
    setTimeLeft(exam.durationMinutes * 60);
    setExamState('taking');
  };

  const handleStartExam = (exam: Exam) => {
    if (!student || !student.name.trim() || !student.group.trim()) {
      setPendingExam(exam);
      setIsFirstLaunch(true);
      setShowRegistrationModal(true);
      return;
    }
    executeStartExam(exam);
  };

  const handleStudentSaved = (saved: StudentProfile) => {
    setStudent(saved);
    setStudentName(saved.name);
    setStudentGroup(saved.group);
    setIsFirstLaunch(false);
    setShowRegistrationModal(false);

    if (pendingExam) {
      executeStartExam(pendingExam);
      setPendingExam(null);
    }
  };

  const handleLogoutStudent = () => {
    clearStudentSession();
    setStudent(null);
    setStudentName('');
    setStudentGroup('');
    setIsFirstLaunch(true);
    setShowRegistrationModal(true);
  };

  const handleGamePointsEarned = (points: number, newBadges: string[]) => {
    const refreshed = getStoredStudent();
    if (refreshed) {
      setStudent(refreshed);
    }
  };

  const handleOpenCertificateFromHistory = (record: ExamHistoryRecord) => {
    setCertificateData({
      studentName: student?.name || studentName || 'Student Name',
      studentSchool: student?.school || 'Egyptian Secondary School',
      studentGrade: student?.grade || '1st Secondary',
      examTitle: record.examTitle,
      score: record.score,
      maxMarks: record.maxMarks,
      percentage: record.percentage,
      dateStr: new Date(record.completedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    });
    setShowCertificateModal(true);
  };

  const handleSelectOption = (qId: string, optionIdx: number, isMrq: boolean) => {
    setMcqAnswers(prev => {
      const current = prev[qId] || [];
      if (isMrq) {
        if (current.includes(optionIdx)) {
          return { ...prev, [qId]: current.filter(i => i !== optionIdx) };
        } else {
          if (current.length >= 2) {
            return { ...prev, [qId]: [current[1], optionIdx] };
          }
          return { ...prev, [qId]: [...current, optionIdx] };
        }
      } else {
        return { ...prev, [qId]: [optionIdx] };
      }
    });
  };

  const handleSubmitExam = async () => {
    if (!activeExam || isSubmittingExamRef.current) return;
    isSubmittingExamRef.current = true;
    setShowSubmitConfirmModal(false);
    setExamState('evaluating');

    try {
      // 1. Evaluate MCQs
      let earnedMCQ = 0;
      let maxMCQ = 0;

      activeExam.mcqs.forEach(q => {
        maxMCQ += q.points;
        const userAns = mcqAnswers[q.id] || [];
        if (q.type === 'mrq') {
          const correctCount = userAns.filter(ans => q.correctAnswers.includes(ans)).length;
          if (correctCount === 2 && userAns.length === 2) {
            earnedMCQ += q.points;
          } else if (correctCount === 1 && userAns.length <= 2) {
            earnedMCQ += q.points / 2;
          }
        } else {
          if (userAns.length > 0 && userAns[0] === q.correctAnswers[0]) {
            earnedMCQ += q.points;
          }
        }
      });

      if (activeExam.reading) {
        activeExam.reading.questions.forEach(q => {
          maxMCQ += q.points;
          const userAns = mcqAnswers[q.id] || [];
          if (userAns.length > 0 && userAns[0] === q.correctAnswers[0]) {
            earnedMCQ += q.points;
          }
        });
      }

      let earnedTranslation = 0;
      let maxTranslation = 0;
      if (activeExam.translation) {
        activeExam.translation.forEach(t => {
          maxTranslation += 2;
          if (translationAnswers[t.id] === t.correctIndex) {
            earnedTranslation += 2;
          }
        });
      }

      setMcqScore(earnedMCQ + earnedTranslation);

      // 2. Evaluate Story Questions via Server-Side AI / Built-in Rubric
      const storyEvalResults: { [qId: string]: StoryEvaluation } = {};
      let earnedStory = 0;
      let maxStory = 0;

      if (activeExam.storyQuestions) {
        for (const st of activeExam.storyQuestions) {
          maxStory += st.maxMarks;
          const userText = storyAnswers[st.id] || '';
          const evalRes = await gradeStoryWithAI(
            st.chapter,
            st.question,
            userText,
            st.modelAnswer,
            st.keyCriteria
          );
          storyEvalResults[st.id] = evalRes;
          earnedStory += evalRes.score;
        }
        setStoryEvaluations(storyEvalResults);
      }

      // 3. Evaluate Writing Task via Server-Side AI / Built-in Rubric
      let earnedEssay = 0;
      let maxEssay = 0;
      let essayRes: EssayEvaluation | null = null;

      if (activeExam.writingTask) {
        maxEssay = 14;
        essayRes = await gradeEssayWithAI(
          activeExam.writingTask.title,
          activeExam.writingTask.prompt,
          essayAnswer,
          activeExam.writingTask.modelResponse
        );
        setEssayEvaluation(essayRes);
        earnedEssay = essayRes.totalScore;
      }

      // 4. Evaluate Baccalaureate Academic Research Task if present
      let earnedResearch = 0;
      let maxResearch = 0;
      if (activeExam.academicResearchTask) {
        maxResearch = activeExam.academicResearchTask.maxMarks || 6;
        const researchRes = await gradeResearchWithAI(
          activeExam.academicResearchTask.title,
          activeExam.academicResearchTask.thesisPrompt,
          researchAnswer,
          activeExam.academicResearchTask.modelDefense,
          maxResearch
        );
        setResearchEvaluation(researchRes);
        earnedResearch = researchRes.score;
      } else {
        setResearchEvaluation(null);
      }

      const totalPossible = maxMCQ + maxTranslation + maxStory + maxEssay + maxResearch;
      const totalAchieved = Number(
        (earnedMCQ + earnedTranslation + earnedStory + earnedEssay + earnedResearch).toFixed(1)
      );
      const calculatedPercentage = totalPossible > 0 ? Math.round((totalAchieved / totalPossible) * 100) : 0;

      setTotalEarned(totalAchieved);
      setTotalMax(totalPossible);
      setPercentage(calculatedPercentage);

      // Progression unlocking scoped to the exam's track + grade
      if (activeExam.category === 'unit_level' || !activeExam.category) {
        const examScopeKey = `${
          activeExam.trackType === 'baccalaureate' ? 'baccalaureate' : examSecondaryPath
        }_g${activeExam.grade || examGrade}`;
        const scopedProgress = progressByScope[examScopeKey] || initialProgress;
        const currentUnitProgress = scopedProgress[activeExam.unitId] || initialProgress[activeExam.unitId] || initialProgress[1];
        const isPass = calculatedPercentage >= 70;
        const nextLevel = (activeExam.level + 1) as ExamLevel;

        const updatedUnitProgress = {
          ...currentUnitProgress,
          [activeExam.level]: {
            unlocked: true,
            completed: true,
            bestScore: Math.max(currentUnitProgress[activeExam.level]?.bestScore || 0, totalAchieved),
            percentage: Math.max(currentUnitProgress[activeExam.level]?.percentage || 0, calculatedPercentage),
            lastAttemptDate: new Date().toLocaleDateString('ar-EG')
          }
        };

        if (isPass && nextLevel <= 5) {
          updatedUnitProgress[nextLevel] = {
            ...updatedUnitProgress[nextLevel],
            unlocked: true
          };
        }

        saveProgress(
          {
            ...scopedProgress,
            [activeExam.unitId]: updatedUnitProgress
          },
          examScopeKey
        );
      }

      // Record exam completion in persistent student history & award points
      const { student: updatedStudent } = recordExamCompletion({
        examId: activeExam.id,
        examTitle: activeExam.levelTitle,
        category: activeExam.category,
        unitId: activeExam.unitId,
        score: totalAchieved,
        maxMarks: totalPossible,
        percentage: calculatedPercentage,
      });
      setStudent(updatedStudent);

      // Background sync to verified cloud webhook (or retain in offline queue)
      const syncPayload: CloudSyncPayload = {
        studentId: updatedStudent.id,
        studentName: updatedStudent.name,
        school: updatedStudent.school,
        grade: updatedStudent.grade,
        group: updatedStudent.group,
        examId: activeExam.id,
        examTitle: activeExam.levelTitle,
        category: activeExam.category,
        score: totalAchieved,
        maxMarks: totalPossible,
        percentage: calculatedPercentage,
        timestamp: new Date().toISOString(),
        platform: isPackagedMobileEnvironment() ? 'android-capacitor' : 'web-pwa',
      };
      syncExamResultToCloud(syncPayload);

      // Direct delivery to Google Sheets via Google Apps Script Web App
      sendExamResult(
        updatedStudent.id,
        updatedStudent.name,
        activeExam.levelTitle,
        `${totalAchieved}/${totalPossible}`,
        Math.round(calculatedPercentage / 2),
        isPackagedMobileEnvironment() ? 'Android App' : 'Web App'
      );

      setExamState('result');
    } finally {
      isSubmittingExamRef.current = false;
    }
  };

  const handleSpeakText = (text: string) => {
    speakText(text, 'en', { rate: 0.95 });
  };

  const handleSafePrintExam = () => {
    if (!isPackagedMobileEnvironment() && typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
      return;
    }
    if (activeExam) {
      setCertificateData({
        studentName: student?.name || studentName || 'Student Name',
        studentSchool: student?.school || 'Secondary School',
        studentGrade: student?.grade || '1st Secondary',
        examTitle: activeExam.levelTitle,
        score: totalEarned,
        maxMarks: totalMax || 30,
        percentage: percentage,
        dateStr: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      });
      setShowCertificateModal(true);
    }
  };

  // Dedicated Lesson Viewer Modal for Exams study
  const [examStudyUnit, setExamStudyUnit] = useState<UnitCurriculum | null>(null);

  // Initialize unified Browser History + Android Hardware Back Button lifecycle
  useEffect(() => {
    initGlobalBackNavigationListener();
  }, []);

  useEffect(() => {
    const activeModalName = showSubmitConfirmModal
      ? 'submit_confirm'
      : showExitExamConfirmModal
      ? 'exit_exam_confirm'
      : examStudyUnit
      ? 'lesson_viewer'
      : showCertificateModal
      ? 'certificate'
      : showShareModal
      ? 'share'
      : showRegistrationModal
      ? 'registration'
      : showInstallModal
      ? 'install'
      : null;

    syncNavigationStateToHistory({
      tab: currentAppTab,
      hasModalOpen: Boolean(activeModalName),
      modalId: activeModalName || undefined,
      examState,
    });
  }, [
    currentAppTab,
    examState,
    examStudyUnit,
    showSubmitConfirmModal,
    showExitExamConfirmModal,
    showCertificateModal,
    showShareModal,
    showRegistrationModal,
    showInstallModal,
  ]);

  useEffect(() => {
    const unregister = registerBackNavigationHandler('app-root-navigation', () => {
      if (showSubmitConfirmModal) {
        setShowSubmitConfirmModal(false);
        return true;
      }
      if (showExitExamConfirmModal) {
        setShowExitExamConfirmModal(false);
        return true;
      }
      if (showCertificateModal) {
        setShowCertificateModal(false);
        return true;
      }
      if (showShareModal) {
        setShowShareModal(false);
        return true;
      }
      if (showInstallModal) {
        setShowInstallModal(false);
        return true;
      }
      if (showRegistrationModal) {
        setShowRegistrationModal(false);
        setPendingExam(null);
        return true;
      }
      if (examStudyUnit) {
        stopSpeaking();
        setExamStudyUnit(null);
        return true;
      }
      if (examState === 'taking') {
        setShowExitExamConfirmModal(true);
        return true;
      }
      if (examState === 'result' || examState === 'review') {
        stopSpeaking();
        setExamState('lobby');
        setIsPrintMode(false);
        return true;
      }
      if (currentAppTab !== 'home') {
        stopSpeaking();
        setLaunchedGame(null);
        setCurrentAppTab('home');
        return true;
      }
      return false;
    });
    return unregister;
  }, [
    showSubmitConfirmModal,
    showExitExamConfirmModal,
    showCertificateModal,
    showShareModal,
    showInstallModal,
    showRegistrationModal,
    examStudyUnit,
    examState,
    currentAppTab,
  ]);

  // Active units for current selected grade and educational pathway (Dynamic Data Binding)
  const activeExamUnits = getExamsUnits(examGrade, examSecondaryPath);
  const currentUnit = activeExamUnits.find(u => u.id === selectedUnitId) || activeExamUnits[0] || allUnits[0];
  const examsHeaderMeta = getExamsHeaderMeta(examGrade, examSecondaryPath);

  const handleSelectExamPath = (path: 'general' | 'baccalaureate') => {
    setExamSecondaryPath(path);
    setActiveTab('levels');
    const units = getExamsUnits(examGrade, path);
    setSelectedUnitId(units[0]?.id || 1);
  };

  const handleSelectExamGrade = (grade: number) => {
    setExamGrade(grade);
    setActiveTab('levels');
    const units = getExamsUnits(grade, examSecondaryPath);
    setSelectedUnitId(units[0]?.id || 1);
  };

  const handleOpenStudyForCurrentExamUnit = () => {
    // Look for matching UnitCurriculum in the master catalog or secondary units
    let matchedUnit = (examSecondaryPath === 'general'
      ? allSecondaryGeneralUnits.find(u => u.grade === examGrade && u.unitNumber === currentUnit.id)
      : allCurriculaUnits.find(
          u => u.stage === 'Secondary' && u.grade === examGrade && u.unitNumber === currentUnit.id &&
          (u.track === 'Egyptian Baccalaureate' || u.secondaryPath === 'egyptian_baccalaureate')
        )
    ) || allCurriculaUnits.find(
      u => u.stage === 'Secondary' && u.grade === examGrade && u.unitNumber === currentUnit.id
    );

    if (!matchedUnit) {
      // Dynamic fallback UnitCurriculum with full rich structure
      matchedUnit = {
        stage: 'Secondary',
        grade: examGrade,
        gradeLabel: examsHeaderMeta.badge,
        track: examSecondaryPath === 'general' ? 'General Secondary' : 'Egyptian Baccalaureate',
        semester: 1,
        unitNumber: currentUnit.id,
        unitTitle: currentUnit.title,
        unitTitleAr: currentUnit.titleAr,
        theme: currentUnit.theme || examsHeaderMeta.description,
        vocabularyModule: {
          keyWords: [
            {
              word: currentUnit.title.split(' ')[0] || 'Core Theme',
              partOfSpeech: 'noun',
              meaningEn: `Key target lexis for ${currentUnit.title}`,
              meaningAr: currentUnit.titleAr,
              exampleSentence: `Students analyze the core concepts of ${currentUnit.title} in their exam answers.`
            },
            {
              word: 'distinction',
              partOfSpeech: 'noun',
              meaningEn: 'A high level of excellence or clear difference.',
              meaningAr: 'التميز والتفوق الأكاديمي',
              exampleSentence: 'Consistent review leads to academic distinction in national examinations.'
            }
          ],
          collocations: [
            {
              phrase: `master ${currentUnit.title}`,
              meaningAr: 'يتقن مهارات ومفردات الوحدة',
              example: `Dedicated learners master ${currentUnit.title} before taking the Level 5 exam.`
            }
          ],
          exercises: []
        },
        grammarModule: {
          ruleName: currentUnit.grammarFocus || examsHeaderMeta.grammarFocusSummary,
          ruleNameAr: 'القواعد والتراكيب الامتحانية المعتمدة',
          explanationSummary: `Official ministerial grammar focus: ${currentUnit.grammarFocus || examsHeaderMeta.grammarFocusSummary}.`,
          detailedRules: [
            {
              title: 'Structure & Ministry Rules',
              explanation: currentUnit.grammarFocus || examsHeaderMeta.grammarFocusSummary,
              examples: [
                'Ensure correct subject-verb harmony and tense continuity in multi-clause sentences.'
              ]
            }
          ],
          exercises: []
        },
        readingModule: {
          passageTitle: currentUnit.title,
          passage: 'Passage content',
          criticalThinkingFocus: 'HOTS',
          questions: []
        },
        listeningModule: {
          audioTitle: currentUnit.title,
          speakerRoles: 'Speakers',
          transcript: '',
          durationApprox: '3 mins'
        },
        unitExam: {
          examId: `exam_${currentUnit.id}`,
          examTitle: currentUnit.title,
          durationMinutes: 30,
          totalMarks: 30,
          questions: []
        }
      };
    }

    setExamStudyUnit(matchedUnit);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased pb-24" dir="ltr">
      {/* Sticky Top AppHeader for the 5-Tab Mobile-First Experience */}
      {examState === 'lobby' && !examStudyUnit ? (
        <AppHeader
          student={student}
          onLogoClick={() => {
            setCurrentAppTab('home');
            setLaunchedGame(null);
          }}
          onOpenProfile={() => setCurrentAppTab('profile')}
          onOpenLeaderboard={() => setCurrentAppTab('leaderboard')}
          onOpenExams={() => setCurrentAppTab('exams')}
        />
      ) : (
        <Header
          student={student}
          studentName={studentName}
          currentTab={currentAppTab}
          onLogoClick={() => {
            if (examState === 'taking') {
              setShowExitExamConfirmModal(true);
              return;
            }
            setCurrentAppTab('home');
            setExamState('lobby');
            setIsPrintMode(false);
          }}
          onNavigateTab={(tab) => {
            if (examState === 'taking') {
              setShowExitExamConfirmModal(true);
              return;
            }
            setCurrentAppTab(tab);
            setExamState('lobby');
            setIsPrintMode(false);
          }}
          onStartNow={() => {
            if (examState === 'taking') {
              setShowExitExamConfirmModal(true);
              return;
            }
            setCurrentAppTab('curricula');
            setExamState('lobby');
            setIsPrintMode(false);
          }}
          onOpenAbout={() => {
            const el = document.getElementById('footer-brand-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenProfile={() => {
            if (examState === 'taking') {
              setShowExitExamConfirmModal(true);
              return;
            }
            setCurrentAppTab('profile');
          }}
        />
      )}

      {/* NATIVE FULL-PAGE LESSON EXPERIENCE (When opened for deep study) */}
      {examStudyUnit ? (
        <LessonViewerModal
          unit={examStudyUnit}
          isOpen={Boolean(examStudyUnit)}
          onClose={() => setExamStudyUnit(null)}
          onTakeExam={(exam) => {
            setExamStudyUnit(null);
            const found = findAnyExamAcrossAllGrades(exam.examId) || currentUnit.exams[0];
            if (found) handleStartExam(found);
          }}
        />
      ) : (
        /* Main Content Area */
        <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-4">
          {/* LOBBY VIEW */}
          {examState === 'lobby' && (
          <div>
            {/* TAB 1: HOME (الرئيسية) */}
            {currentAppTab === 'home' && (
              <HomeScreen
                student={student}
                onNavigateTab={(tab) => {
                  setLaunchedGame(null);
                  setCurrentAppTab(tab);
                }}
                onLaunchGame={(gameType) => {
                  setLaunchedGame(gameType);
                  setCurrentAppTab('games');
                }}
                onStartDailyQuest={() => setCurrentAppTab('games')}
                onContinueLesson={(unit) => {
                  if (unit) {
                    setCurriculumStage(unit.stage);
                    setCurriculumGrade(unit.grade);
                  }
                  setCurrentAppTab('curricula');
                }}
                onStateUpdated={() => {
                  setStudent(getStoredStudent());
                  setHeaderRefreshTick((t) => t + 1);
                }}
              />
            )}

            {/* TAB 2: CURRICULA (المناهج) */}
            {currentAppTab === 'curricula' && (
              <CurriculaScreen
                currentStage={curriculumStage}
                currentGrade={curriculumGrade}
                onSelectStage={setCurriculumStage}
                onSelectGrade={setCurriculumGrade}
                onOpenUnit={(unit) => setExamStudyUnit(unit)}
                onOpenExamsHub={() => setCurrentAppTab('exams')}
                onStateUpdated={() => {
                  setStudent(getStoredStudent());
                  setHeaderRefreshTick((t) => t + 1);
                }}
              />
            )}

            {/* TAB 3: GAMES (الألعاب / ساحة الألعاب) */}
            {currentAppTab === 'games' && (
              <GamesScreen
                student={student}
                onPointsEarned={(pts, badges) => {
                  handleGamePointsEarned(pts, badges);
                  setHeaderRefreshTick((t) => t + 1);
                }}
                initialStage={curriculumStage}
                initialGrade={curriculumGrade}
                activeLaunchedGame={launchedGame}
                onGameClosed={() => setLaunchedGame(null)}
              />
            )}

            {/* TAB 4: SMART TOOLS (الأدوات الذكية) */}
            {(currentAppTab === 'tools' || currentAppTab === 'translator' || currentAppTab === 'dictionary') && (
              <SmartToolsScreen
                onStateUpdated={() => {
                  setStudent(getStoredStudent());
                  setHeaderRefreshTick((t) => t + 1);
                }}
              />
            )}

            {/* TAB 5: PROFILE & TROPHIES (حسابي والجوائز) */}
            {(currentAppTab === 'profile' || currentAppTab === 'leaderboard') && (
              <ProfileScreen
                student={student}
                onUpdateStudentName={(newName) => {
                  setStudentName(newName);
                  setStudent(getStoredStudent());
                  setHeaderRefreshTick((t) => t + 1);
                }}
                onStateUpdated={() => {
                  setStudent(getStoredStudent());
                  setHeaderRefreshTick((t) => t + 1);
                }}
              />
            )}

            {/* EXAMS & QUESTION BANK TAB */}
            {currentAppTab === 'exams' && (
              <ExamsHub
                student={student}
                onStartExam={handleStartExam}
                onPrintExam={(exam) => {
                  setActiveExam(exam);
                  setIsPrintMode(true);
                  setExamState('review');
                }}
                onOpenRegistration={() => setShowRegistrationModal(true)}
                onOpenLesson={(unit) => setExamStudyUnit(unit)}
                onStudentUpdated={(updated) => {
                  setStudent(updated);
                  setStudentName(updated.name);
                  setStudentGroup(updated.group);
                }}
                examSecondaryPath={examSecondaryPath}
                onSelectExamPath={handleSelectExamPath}
                examGrade={examGrade}
                onSelectExamGrade={handleSelectExamGrade}
                activeExamUnits={activeExamUnits}
                currentUnit={currentUnit}
                selectedUnitId={selectedUnitId}
                onSelectUnitId={setSelectedUnitId}
                progress={progress}
                examsHeaderMeta={examsHeaderMeta}
                secondaryActiveTab={activeTab}
                onChangeSecondaryTab={setActiveTab}
                governmentalExams={governmentalExams}
                term1RevisionExams={term1RevisionExams}
                term2RevisionExams={term2RevisionExams}
              />
            )}

            {false && (
              <div className="space-y-8 animate-in fade-in duration-200">

                {/* Secondary Stage Dual Pathways Switcher (2026/2027) */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/80 border-2 border-blue-200/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B397D] text-[#FFC928] flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                      26/27
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-100/80 px-2.5 py-0.5 rounded-full">
                          Egyptian MOE Syllabus
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          Select Educational Track
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-black text-[#0B397D] mt-0.5">
                        {examSecondaryPath === 'general'
                          ? 'General Secondary Path (الثانوية العامة المصرية)'
                          : 'Egyptian Baccalaureate Path (البكالوريا المصرية)'}
                      </h2>
                    </div>
                  </div>

                  {/* Toggle buttons */}
                  <div className="flex items-center bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs w-full md:w-auto">
                    <button
                      onClick={() => handleSelectExamPath('general')}
                      className={`flex-1 md:flex-initial px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        examSecondaryPath === 'general'
                          ? 'bg-[#0B397D] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>General Secondary (الثانوية العامة)</span>
                    </button>

                    <button
                      onClick={() => handleSelectExamPath('baccalaureate')}
                      className={`flex-1 md:flex-initial px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        examSecondaryPath === 'baccalaureate'
                          ? 'bg-[#0878E8] text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Egyptian Baccalaureate (البكالوريا المصرية)</span>
                    </button>
                  </div>
                </div>

                {/* Grade Level Selector for Exams */}
                <div className="flex items-center justify-between flex-wrap gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <BookOpen className="w-4 h-4 text-[#0B397D]" />
                    <span>Select Grade Level / الصف الدراسي:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      { grade: 10, label: 'Secondary 1 (الصف الأول)', labelBac: 'Sec 1 Baccalaureate' },
                      { grade: 11, label: 'Secondary 2 (الصف الثاني)', labelBac: 'Sec 2 Baccalaureate' },
                      { grade: 12, label: 'Secondary 3 (الثانوية العامة)', labelBac: 'Sec 3 Baccalaureate Capstone' }
                    ].map(g => (
                      <button
                        key={g.grade}
                        onClick={() => handleSelectExamGrade(g.grade)}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                          examGrade === g.grade
                            ? 'bg-[#0B397D] text-white shadow-md ring-2 ring-[#FFC928]'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80'
                        }`}
                      >
                        <span>{examSecondaryPath === 'general' ? g.label : g.labelBac}</span>
                        {examGrade === g.grade && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 1. GENERAL SECONDARY STREAM (THANAWEYA AMMA) */}
                {examSecondaryPath === 'general' && (
                  <div className="space-y-6">
                    {/* Sub-Tabs: Levels, Governmental, Term 1, Term 2 */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab('levels')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'levels'
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-white border text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Unit Levels 1-5
                  </button>
                  <button
                    onClick={() => setActiveTab('governmental')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'governmental'
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-white border text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Gov Directorate Exams (10+ Papers)
                  </button>
                  <button
                    onClick={() => setActiveTab('term1')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'term1'
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-white border text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Term 1 Comprehensive Revision
                  </button>
                  <button
                    onClick={() => setActiveTab('term2')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      activeTab === 'term2'
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-white border text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Term 2 Final Revision
                  </button>
                </div>

            {/* TAB 1: 5-LEVEL PROGRESSION SYSTEM */}
            {activeTab === 'levels' && (
              <div className="space-y-8">
                {/* Hero / Banner */}
                <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-6 md:p-8 text-white shadow-md">
                  <div className="max-w-3xl space-y-3">
                    <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold flex items-center gap-2">
                      <span>Egyptian MOE Official Specifications</span>
                      <span>·</span>
                      <span>{examsHeaderMeta.badge}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {examsHeaderMeta.title}
                    </h1>
                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                      {examsHeaderMeta.description}
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-blue-200">
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Authentic Textbook Sources</span>
                      <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-300" /> AI Rubric Auto-Correction</span>
                      <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-blue-300" /> {examsHeaderMeta.literatureNovel}</span>
                    </div>
                  </div>
                </div>

                {/* Unit Selector */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-900" />
                      <span>Select Curriculum Unit — {examsHeaderMeta.trackLabel}</span>
                    </h2>
                    <span className="text-xs text-slate-500 font-mono">Units 1 - {activeExamUnits.length}</span>
                  </div>

                  <div className={`grid grid-cols-2 sm:grid-cols-3 ${activeExamUnits.length > 3 ? 'lg:grid-cols-6' : 'lg:grid-cols-3'} gap-3`}>
                    {activeExamUnits.map(unit => {
                      const isSelected = unit.id === currentUnit.id;
                      const unitProg = progress[unit.id] || initialProgress[unit.id] || initialProgress[1];
                      const completedCount = Object.values(unitProg).filter(l => l.completed).length;

                      return (
                        <button
                          key={unit.id}
                          onClick={() => setSelectedUnitId(unit.id)}
                          className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-blue-900 bg-blue-50/80 shadow-sm ring-1 ring-blue-900'
                              : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                            <span>Unit {unit.id}</span>
                            <span className="text-[11px] text-blue-700">{completedCount}/{unit.exams.length} Levels</span>
                          </div>
                          <div className="font-bold text-sm text-slate-900 truncate">{unit.title}</div>
                          <div className="text-xs text-slate-500 truncate" dir="rtl">{unit.titleAr}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Current Unit Details & 5 Levels */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                        Unit {currentUnit.id} Profile · {examsHeaderMeta.badge}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                        {currentUnit.title} — <span className="font-medium text-slate-600" dir="rtl">{currentUnit.titleAr}</span>
                      </h3>
                      <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                        <span><strong>Grammar Focus:</strong> {currentUnit.grammarFocus}</span>
                        <span>·</span>
                        <span><strong>Literature:</strong> {currentUnit.novelChapter}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleOpenStudyForCurrentExamUnit}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-[#0B397D] to-[#0878E8] text-white hover:from-[#0957B7] hover:to-[#0768c9] flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                        title="Study Vocabulary Bank & Grammar Masterclass with Exam Traps"
                      >
                        <BookOpen className="w-4 h-4 text-[#FFC928]" />
                        <span>Explore Lessons / المفردات والقواعد</span>
                      </button>

                      <button
                        onClick={() => {
                          const exam = currentUnit.exams.find(e => e.level === 4) || currentUnit.exams[0];
                          if (exam) {
                            setActiveExam(exam);
                            setIsPrintMode(true);
                            setExamState('review');
                          }
                        }}
                        className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Printer className="w-4 h-4 text-slate-600" />
                        <span>Print Standard Board Sheet</span>
                      </button>
                    </div>
                  </div>

                  {/* 5 Levels Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
                    {currentUnit.exams.map((exam) => {
                      const unitProg = progress[currentUnit.id] || initialProgress[currentUnit.id] || initialProgress[1];
                      const levelProg = unitProg[exam.level] || { unlocked: exam.level === 1, completed: false, bestScore: 0, percentage: 0 };
                      const isUnlocked = levelProg.unlocked;
                      const isCompleted = levelProg.completed;
                      const isPassed = levelProg.percentage >= 70;

                      return (
                        <div
                          key={exam.id}
                          className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                            !isUnlocked
                              ? 'bg-slate-50/80 border-slate-200 opacity-75'
                              : isCompleted
                                ? isPassed
                                  ? 'bg-emerald-50/50 border-emerald-200'
                                  : 'bg-amber-50/50 border-amber-200'
                                : 'bg-white border-blue-200 shadow-sm'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                !isUnlocked
                                  ? 'bg-slate-200 text-slate-600'
                                  : exam.level === 5
                                    ? 'bg-purple-100 text-purple-800'
                                    : exam.level === 4
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-slate-100 text-slate-700'
                              }`}>
                                Level {exam.level}
                              </span>
                              {isUnlocked ? (
                                isCompleted ? (
                                  isPassed ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  ) : (
                                    <span className="text-[10px] font-bold text-amber-600">Re-try</span>
                                  )
                                ) : (
                                  <Unlock className="w-4 h-4 text-blue-600" />
                                )
                              ) : (
                                <Lock className="w-4 h-4 text-slate-400" />
                              )}
                            </div>

                            <div className="font-bold text-sm text-slate-900 leading-snug">
                              {exam.levelTitle.split('&')[0]}
                            </div>
                            <div className="text-xs text-slate-500" dir="rtl">
                              {exam.levelTitleAr.split(':')[1] || exam.levelTitleAr}
                            </div>

                            <div className="text-xs text-slate-500 pt-1 space-y-1">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                <span>{exam.durationMinutes} Mins · {exam.totalMarks} Marks</span>
                              </div>
                              {isCompleted && (
                                <div className="font-semibold text-slate-700">
                                  Score: {levelProg.percentage}% ({levelProg.bestScore}/{exam.totalMarks})
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="pt-4">
                            <button
                              disabled={!isUnlocked}
                              onClick={() => handleStartExam(exam)}
                              className={`w-full py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
                                !isUnlocked
                                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                  : isPassed
                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                    : 'bg-blue-900 hover:bg-blue-800 text-white shadow-sm'
                              }`}
                            >
                              <span>{!isUnlocked ? 'Locked' : isCompleted ? 'Retake Exam' : 'Start Exam'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: GOVERNMENTAL DIRECTORATE EXAMS BANK */}
            {activeTab === 'governmental' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-6 md:p-8 text-white shadow-md">
                  <div className="max-w-3xl space-y-2">
                    <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Official Egyptian Governorate Directorates (نماذج امتحانات المحافظات الرسمية)</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      بنك امتحانات المحافظات الرسمية المقررة
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      نماذج امتحانات فعلية معتمدة من مديريات التربية والتعليم في مختلف المحافظات (القاهرة، الجيزة، الإسكندرية، الدقهلية، البحيرة، الشرقية، المنوفية، أسيوط).
                      تم تصنيفها وإعدادها بدقة متناهية وفق ورقة الامتحان الوزاري المعتمدة.
                    </p>
                  </div>
                </div>

                {/* Grid of Governmental Exams */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {governmentalExams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 hover:border-blue-900/50 transition-all shadow-sm flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
                            Unit {exam.unitId} Exam
                          </span>
                          <span className="text-xs text-slate-400 font-mono">
                            {exam.durationMinutes} Mins · {exam.totalMarks} M
                          </span>
                        </div>

                        <h3 className="font-bold text-base text-slate-900 leading-snug">
                          {exam.levelTitle}
                        </h3>

                        <div className="text-xs text-slate-600 font-medium" dir="rtl">
                          {exam.governorate}
                        </div>

                        <div className="text-xs text-slate-500 pt-1 space-y-1">
                          <div>• 5-Option MRQs & Vocabulary MCQs</div>
                          {exam.reading && <div>• Reading Comprehension ({exam.reading.questions.length} questions)</div>}
                          {exam.translation && <div>• Translation (English ⇄ Arabic)</div>}
                          {exam.storyQuestions && <div>• Novel Critical Thinking: The Old Man & the Sea</div>}
                          {exam.writingTask && <div>• Composition: {exam.writingTask.title}</div>}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <button
                          onClick={() => handleStartExam(exam)}
                          className="flex-1 py-2 px-3 text-xs font-bold rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>Take Exam (بدء الامتحان)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setActiveExam(exam);
                            setIsPrintMode(true);
                            setExamState('review');
                          }}
                          className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                          title="Print Exam Paper"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TERM 1 REVISION */}
            {activeTab === 'term1' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 rounded-2xl p-6 md:p-8 text-white shadow-md">
                  <div className="max-w-3xl space-y-2">
                    <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>First Term Comprehensive Revision (مراجعة نصف العام - الفصل الدراسي الأول)</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      نماذج امتحانات المراجعة الشاملة لنصف العام (Units 1, 2, 3)
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      اختبارات وزارية شاملة تغطي مفردات وقواعد الوحدات الأولى والثانية والثالثة، قصة <em>The Old Man and the Sea</em> (الفصول 1، 2، 3)، وتطبيقات مهارات المقال الوصفي والتحليلي.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {term1RevisionExams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900">
                            Term 1 Board Mock
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {exam.durationMinutes} Mins · {exam.totalMarks} Marks
                          </span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-900">
                          {exam.levelTitle}
                        </h3>
                        <div className="text-xs text-slate-600 font-medium" dir="rtl">
                          {exam.levelTitleAr}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          يشمل: أسئلة اختيار من متعدد للمفردات والقواعد، قطعة فهم متحررة عن السكوتر الكهربائي، ترجمة ثنائية، أسئلة تفكير نقدي على القصة، ومقال وصفي عن أجواء المكتبة في يوم ماطر.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                        <button
                          onClick={() => handleStartExam(exam)}
                          className="flex-1 py-2.5 px-4 text-xs font-bold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                          <span>Start Term 1 Mock Exam</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setActiveExam(exam);
                            setIsPrintMode(true);
                            setExamState('review');
                          }}
                          className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                          title="Print Exam Paper"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: TERM 2 REVISION */}
            {activeTab === 'term2' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-blue-950 rounded-2xl p-6 md:p-8 text-white shadow-md">
                  <div className="max-w-3xl space-y-2">
                    <div className="text-xs uppercase tracking-wider text-purple-300 font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Second Term Comprehensive Revision (مراجعة نهاية العام - الفصل الدراسي الثاني)</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      نماذج امتحانات المراجعة الشاملة للفصل الثاني (Units 4, 5, 6)
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      اختبارات وزارية نموذجية تغطي الوحدات 4 و5 و6: الاقتصاد الأخضر، الأسماء المعدودة وغير المعدودة، أدوات التعريف، مهارات كتابة الإيميل الرسمي والسيرة الذاتية (CV)، والفصول الأخيرة من قصة العجوز والبحر.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {term2RevisionExams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-900">
                            Term 2 Board Mock
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {exam.durationMinutes} Mins · {exam.totalMarks} Marks
                          </span>
                        </div>

                        <h3 className="font-bold text-lg text-slate-900">
                          {exam.levelTitle}
                        </h3>
                        <div className="text-xs text-slate-600 font-medium" dir="rtl">
                          {exam.levelTitleAr}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          يشمل: مفردات متقدمة، أسئلة قراءة متحررة عن مؤسسة Eco-Vision الصناعية الخضراء، ترجمة رسمية، أسئلة قصة حول رمزية هيكل المارلن العظمي، وإيميل رسمي للتقديم على تدريب في مجال تكنولوجيا المعلومات.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                        <button
                          onClick={() => handleStartExam(exam)}
                          className="flex-1 py-2.5 px-4 text-xs font-bold rounded-lg bg-purple-900 hover:bg-purple-800 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
                        >
                          <span>Start Term 2 Mock Exam</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setActiveExam(exam);
                            setIsPrintMode(true);
                            setExamState('review');
                          }}
                          className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                          title="Print Exam Paper"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

                {/* 2. EGYPTIAN BACCALAUREATE STREAM (البكالوريا المصرية 2026/2027) */}
                {examSecondaryPath === 'baccalaureate' && (
                  <div className="space-y-8">
                    {/* Baccalaureate Hero Banner */}
                    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-blue-400/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="relative z-10 max-w-3xl space-y-3">
                        <div className="text-xs uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span>Egyptian Baccalaureate Examination Series (2026/2027)</span>
                          <span>·</span>
                          <span>{examsHeaderMeta.badge}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          {examsHeaderMeta.title}
                        </h2>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                          {examsHeaderMeta.description}
                        </p>
                        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-blue-200">
                          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Ministry Accredited Dual Stream</span>
                          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-300" /> AI Rubric Auto-Evaluation</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-blue-300" /> Timed Standardized Sessions</span>
                          <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-amber-300" /> {examsHeaderMeta.literatureNovel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Baccalaureate Unit Selector */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-blue-900" />
                          <span>Select Baccalaureate Curriculum Module — {examsHeaderMeta.badge}</span>
                        </h2>
                        <span className="text-xs text-slate-500 font-mono">Modules 1 - {activeExamUnits.length}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {activeExamUnits.map(unit => {
                          const isSelected = unit.id === currentUnit.id;
                          const unitProg = progress[unit.id] || initialProgress[unit.id] || initialProgress[1];
                          const completedCount = Object.values(unitProg).filter(l => l.completed).length;

                          return (
                            <button
                              key={unit.id}
                              onClick={() => setSelectedUnitId(unit.id)}
                              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#0878E8] bg-blue-50/90 shadow-sm ring-1 ring-[#0878E8]'
                                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                                <span className="font-bold text-[#0B397D]">Module {unit.id}</span>
                                <span className="text-[11px] text-blue-700">{completedCount}/{unit.exams.length} Levels</span>
                              </div>
                              <div className="font-bold text-sm text-slate-900 truncate">{unit.title}</div>
                              <div className="text-xs text-slate-500 truncate mt-0.5" dir="rtl">{unit.titleAr}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Current Baccalaureate Module Profile & Progressive Tiers */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-xs">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                        <div>
                          <div className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                            Module {currentUnit.id} Profile · {examsHeaderMeta.badge}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                            {currentUnit.title} — <span className="font-medium text-slate-600" dir="rtl">{currentUnit.titleAr}</span>
                          </h3>
                          <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                            <span><strong>Grammar Focus:</strong> {currentUnit.grammarFocus}</span>
                            <span>·</span>
                            <span><strong>Literature:</strong> {currentUnit.novelChapter}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={handleOpenStudyForCurrentExamUnit}
                            className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-[#0B397D] to-[#0878E8] text-white hover:from-[#0957B7] hover:to-[#0768c9] flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                            title="Study Vocabulary Bank & Grammar Masterclass with Exam Traps"
                          >
                            <BookOpen className="w-4 h-4 text-[#FFC928]" />
                            <span>Explore Lessons / المفردات والقواعد</span>
                          </button>

                          <button
                            onClick={() => {
                              const exam = currentUnit.exams.find(e => e.level === 4) || currentUnit.exams[0];
                              if (exam) {
                                setActiveExam(exam);
                                setIsPrintMode(true);
                                setExamState('review');
                              }
                            }}
                            className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Printer className="w-4 h-4 text-slate-600" />
                            <span>Print Standard Paper</span>
                          </button>
                        </div>
                      </div>

                      {/* Progressive Levels Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
                        {currentUnit.exams.map((exam) => {
                          const unitProg = progress[currentUnit.id] || initialProgress[currentUnit.id] || initialProgress[1];
                          const levelProg = unitProg[exam.level] || { unlocked: exam.level === 1, completed: false, bestScore: 0, percentage: 0 };
                          const isUnlocked = levelProg.unlocked;
                          const isCompleted = levelProg.completed;
                          const isPassed = levelProg.percentage >= 70;

                          return (
                            <div
                              key={exam.id}
                              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                                !isUnlocked
                                  ? 'bg-slate-50/80 border-slate-200 opacity-75'
                                  : isCompleted
                                    ? isPassed
                                      ? 'bg-emerald-50/50 border-emerald-200'
                                      : 'bg-amber-50/50 border-amber-200'
                                    : 'bg-white border-blue-200 shadow-sm'
                              }`}
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                                    !isUnlocked
                                      ? 'bg-slate-200 text-slate-600'
                                      : exam.level === 5
                                        ? 'bg-purple-100 text-purple-800'
                                        : exam.level === 4
                                          ? 'bg-blue-100 text-blue-800'
                                          : 'bg-slate-100 text-slate-700'
                                  }`}>
                                    Level {exam.level}
                                  </span>
                                  {isUnlocked ? (
                                    isCompleted ? (
                                      isPassed ? (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                      ) : (
                                        <span className="text-[10px] font-bold text-amber-600">Re-try</span>
                                      )
                                    ) : (
                                      <Unlock className="w-4 h-4 text-blue-600" />
                                    )
                                  ) : (
                                    <Lock className="w-4 h-4 text-slate-400" />
                                  )}
                                </div>

                                <div className="font-bold text-sm text-slate-900 leading-snug">
                                  {exam.levelTitle.split('&')[0]}
                                </div>
                                <div className="text-xs text-slate-500" dir="rtl">
                                  {exam.levelTitleAr.split(':')[1] || exam.levelTitleAr}
                                </div>

                                <div className="text-xs text-slate-500 pt-1 space-y-1">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                    <span>{exam.durationMinutes} Mins · {exam.totalMarks} Marks</span>
                                  </div>
                                  {isCompleted && (
                                    <div className="font-semibold text-slate-700">
                                      Score: {levelProg.percentage}% ({levelProg.bestScore}/{exam.totalMarks})
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="pt-4">
                                <button
                                  disabled={!isUnlocked}
                                  onClick={() => handleStartExam(exam)}
                                  className={`w-full py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                                    !isUnlocked
                                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                      : isPassed
                                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                        : 'bg-blue-900 hover:bg-blue-800 text-white shadow-sm'
                                  }`}
                                >
                                  <span>{!isUnlocked ? 'Locked' : isCompleted ? 'Retake Exam' : 'Start Exam'}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Standardized Baccalaureate Papers Section */}
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#0B397D]" />
                          <h3 className="text-base font-bold text-slate-900">
                            Standardized Board Examination Papers ({examsHeaderMeta.badge})
                          </h3>
                        </div>
                        <span className="text-xs text-slate-500 font-mono">Central Examination Board</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {getBaccalaureateExamsByGrade(examGrade).map((exam) => (
                          <div
                            key={exam.id}
                            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                          >
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 font-black text-[11px] uppercase tracking-wide">
                                  Baccalaureate Paper
                                </span>
                                <span className="text-xs font-mono font-bold text-slate-500">
                                  {exam.durationMinutes} Mins · {exam.totalMarks} Marks
                                </span>
                              </div>

                              <h3 className="font-bold text-base text-slate-900 leading-snug">
                                {exam.levelTitle}
                              </h3>
                              <div className="text-xs text-slate-600 font-medium" dir="rtl">
                                {exam.levelTitleAr}
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed">
                                Includes: Advanced Lexical Syntax, HOTS Critical Reading Comprehension, Formal Academic Translation, and Structured Essay Rubrics.
                              </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                              <button
                                onClick={() => handleStartExam(exam)}
                                className="flex-1 py-2.5 px-4 text-xs font-bold rounded-xl bg-[#0B397D] hover:bg-blue-800 text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-95"
                              >
                                <span>Start Baccalaureate Paper</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => {
                                  setActiveExam(exam);
                                  setIsPrintMode(true);
                                  setExamState('review');
                                }}
                                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                                title="Print Exam Paper"
                              >
                                <Printer className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

      </div>
    )}

        {/* TAKING EXAM VIEW */}
        {examState === 'taking' && activeExam && (() => {
          const activeNovelTitle = activeExam.grade === 11 
            ? 'King Lear' 
            : activeExam.grade === 12 
              ? 'Great Expectations' 
              : 'The Old Man and the Sea';

          return (
          <div className="space-y-6">
            {/* Exam Header Strip */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-100 text-blue-900 border border-blue-200">
                    {activeExam.trackType === 'baccalaureate' 
                      ? 'Advanced Collegiate Assessment Model (Literature & Critical Synthesis)' 
                      : 'نظام التقييم الرسمي لوزارة التربية والتعليم (85% بابل شيت / إلكتروني + 15% مقالي)'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeExam.governorate || `Unit ${activeExam.unitId} · ${activeExam.levelTitle}`}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mt-1">
                  {activeExam.levelTitle} — <span className="font-medium text-slate-600" dir="rtl">{activeExam.levelTitleAr}</span>
                </h2>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-blue-50/80 border border-blue-200/80 px-2.5 py-1 rounded-lg mt-2 inline-flex">
                  <User className="w-3.5 h-3.5 text-blue-900" />
                  <span>Student: <strong className="text-slate-900">{studentName || 'Registered Student'}</strong></span>
                  <span className="text-slate-300">·</span>
                  <span>Group: <strong className="text-slate-900">{studentGroup || 'Default Group'}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-bold font-mono tabular-nums ${
                  timeLeft < 300 ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span>
                    {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                  </span>
                </div>

                <button
                  id="submitExamBtn"
                  type="button"
                  onClick={() => setShowSubmitConfirmModal(true)}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm cursor-pointer"
                >
                  Submit Exam
                </button>
              </div>
            </div>

            {/* Question Navigator Grid */}
            <div className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-2 overflow-x-auto shadow-2xs">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide shrink-0">
                Question Navigator:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                {activeExam.mcqs.map((q, idx) => {
                  const isAnswered = (mcqAnswers[q.id] || []).length > 0;
                  const isHots = q.difficulty === 'hots' || q.skill === 'Reading';
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => {
                        setActiveSectionTab('mcq');
                        const el = document.getElementById(`q_card_${q.id}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className={`w-7 h-7 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center justify-center shrink-0 relative ${
                        isAnswered
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                      title={`MCQ ${idx + 1} (${q.skill})${isHots ? ' [HOTS ⚠️]' : ''}`}
                    >
                      <span>{idx + 1}</span>
                      {isHots && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] text-slate-400 font-semibold shrink-0 ml-auto hidden sm:block">
                Answered: <strong className="text-blue-900">{Object.keys(mcqAnswers).length}</strong> / {activeExam.mcqs.length}
              </div>
            </div>

            {/* Section Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
              <button
                onClick={() => setActiveSectionTab('mcq')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSectionTab === 'mcq' ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                1. Vocabulary & Grammar ({activeExam.mcqs.length} Qs)
              </button>

              {activeExam.reading && (
                <button
                  onClick={() => setActiveSectionTab('reading')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeSectionTab === 'reading' ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>2. Reading Comprehension (Split-View)</span>
                </button>
              )}

              {activeExam.translation && (
                <button
                  onClick={() => setActiveSectionTab('translation')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeSectionTab === 'translation' ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  3. Translation ({activeExam.translation.length} Qs)
                </button>
              )}

              {activeExam.storyQuestions && (
                <button
                  onClick={() => setActiveSectionTab('story')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeSectionTab === 'story' ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  4. Novel: {activeNovelTitle} ({activeExam.storyQuestions.length} Qs)
                </button>
              )}

              {activeExam.writingTask && (
                <button
                  onClick={() => setActiveSectionTab('writing')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    activeSectionTab === 'writing' ? 'bg-blue-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  5. Writing Task (15% MOE Rubric)
                </button>
              )}

              {activeExam.academicResearchTask && (
                <button
                  onClick={() => setActiveSectionTab('research')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                    activeSectionTab === 'research' ? 'bg-purple-900 text-white' : 'bg-white text-purple-700 border border-purple-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>6. Capstone Research</span>
                </button>
              )}
            </div>

            {/* TAB CONTENT: 1. MCQS */}
            {activeSectionTab === 'mcq' && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Section A: Vocabulary & Structure MCQs</span>
                  <span className="text-[11px] text-blue-900 font-semibold">Single best answer out of 4 options</span>
                </div>

                {activeExam.mcqs.map((q, idx) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    index={idx}
                    selectedAnswers={mcqAnswers[q.id] || []}
                    onSelectOption={(qId, oIdx, isMrq) => handleSelectOption(qId, oIdx, isMrq)}
                    onSpeakText={handleSpeakText}
                    isReviewMode={false}
                  />
                ))}
              </div>
            )}

            {/* TAB CONTENT: 2. READING COMPREHENSION (SPLIT-VIEW) */}
            {activeSectionTab === 'reading' && activeExam.reading && (
              <ReadingComprehensionSplitView
                reading={activeExam.reading}
                allReadingPassages={activeExam.readingPassages}
                selectedAnswers={mcqAnswers}
                onSelectOption={(qId, oIdx, isMrq) => handleSelectOption(qId, oIdx, isMrq)}
                onSpeakText={handleSpeakText}
                isReviewMode={false}
              />
            )}

            {/* TAB CONTENT: 3. TRANSLATION */}
            {activeSectionTab === 'translation' && activeExam.translation && (
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Section C: Translation Skills
                </div>

                {activeExam.translation.map((t, idx) => {
                  const selectedIdx = translationAnswers[t.id];

                  return (
                    <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-bold text-blue-900">
                          Question {idx + 1}: {t.direction === 'en-to-ar' ? 'English to Arabic Translation' : 'Arabic to English Translation'}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">2 Marks</span>
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-lg text-sm md:text-base font-semibold text-slate-900" dir={t.direction === 'ar-to-en' ? 'rtl' : 'ltr'}>
                        "{t.sourceText}"
                      </div>

                      <div className="space-y-2">
                        {t.options.map((opt, oIdx) => {
                          const isSelected = selectedIdx === oIdx;
                          const letter = String.fromCharCode(97 + oIdx);

                          return (
                            <button
                              key={oIdx}
                              onClick={() => setTranslationAnswers(prev => ({ ...prev, [t.id]: oIdx }))}
                              className={`w-full text-left p-3 rounded-lg border text-xs md:text-sm transition-all flex items-start gap-3 ${
                                isSelected
                                  ? 'border-blue-900 bg-blue-50 text-blue-950 font-semibold ring-1 ring-blue-900'
                                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                              }`}
                              dir={t.direction === 'en-to-ar' ? 'rtl' : 'ltr'}
                            >
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                isSelected ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {letter}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB CONTENT: 4. STORY QUESTIONS */}
            {activeSectionTab === 'story' && activeExam.storyQuestions && (
              <div className="space-y-6">
                <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Critical Thinking Story Questions (The Old Man and the Sea):</span>
                    <span>
                      Answer in English in the designated composition field. Your response will be analytically assessed based on official Ministry rubric (Critical Depth, Narrative Accuracy, and Clarity of Argument). Click the lightbulb icon if you need the Arabic translation hint.
                    </span>
                  </div>
                </div>

                {activeExam.storyQuestions.map((st, idx) => {
                  const isHintOpen = !!openStoryHints[st.id];

                  return (
                    <div key={st.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div className="font-bold text-slate-900 text-sm md:text-base leading-relaxed">
                            {st.question}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {/* On-Demand Arabic Hint Button (💡) - Hidden by default */}
                          {st.questionAr && (
                            <button
                              type="button"
                              onClick={() => setOpenStoryHints(prev => ({ ...prev, [st.id]: !prev[st.id] }))}
                              title="Toggle Arabic translation hint"
                              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                                isHintOpen
                                  ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-xs'
                                  : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                              }`}
                            >
                              <Lightbulb className={`w-3.5 h-3.5 ${isHintOpen ? 'fill-current' : ''}`} />
                              <span className="text-[11px] font-extrabold hidden sm:inline">
                                {isHintOpen ? 'Close Hint' : 'Hint'}
                              </span>
                            </button>
                          )}

                          <span className="text-xs font-bold text-slate-500 font-mono px-2 py-1 rounded-lg bg-slate-100 border border-slate-200">
                            {st.maxMarks} Marks
                          </span>
                        </div>
                      </div>

                      {/* On-Demand Arabic Hint Box */}
                      {isHintOpen && st.questionAr && (
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 space-y-1 animate-in fade-in duration-200">
                          <div className="font-bold flex items-center gap-1.5 text-amber-900">
                            <Lightbulb className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            <span>Arabic Translation & Context · إضاءة توضيحية بالعربية:</span>
                          </div>
                          <div dir="rtl" className="font-medium text-slate-800 leading-relaxed">
                            {st.questionAr}
                          </div>
                        </div>
                      )}

                      <textarea
                        rows={4}
                        value={storyAnswers[st.id] || ''}
                        onChange={(e) => setStoryAnswers({ ...storyAnswers, [st.id]: e.target.value })}
                        placeholder="Write your critical analytical answer in English here..."
                        className="w-full p-3.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 font-sans"
                      />

                      <div className="text-xs text-slate-400 flex justify-between">
                        <span>Rubric: Critical Depth (2) · Factual Accuracy (2) · Clarity (1)</span>
                        <span>{(storyAnswers[st.id] || '').trim().split(/\s+/).filter(Boolean).length} words</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* TAB CONTENT: 5. WRITING TASK */}
            {activeSectionTab === 'writing' && activeExam.writingTask && (
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-6">
                <div>
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Section E: Official Writing Task (14 Marks)
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {activeExam.writingTask.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {activeExam.writingTask.prompt}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-lg text-xs border border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Ideas & Relevance:</span>
                    <span className="font-bold text-slate-900">4 Marks</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Grammar & Vocab:</span>
                    <span className="font-bold text-slate-900">4 Marks</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Organization:</span>
                    <span className="font-bold text-slate-900">3 Marks</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Mechanics:</span>
                    <span className="font-bold text-slate-900">3 Marks</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-semibold text-slate-700">Your Composition (120 - 150 words):</label>
                    <span className={`font-mono ${
                      essayAnswer.trim().split(/\s+/).filter(Boolean).length < 120
                        ? 'text-amber-600'
                        : 'text-emerald-600 font-bold'
                    }`}>
                      Word Count: {essayAnswer.trim().split(/\s+/).filter(Boolean).length} / 150
                    </span>
                  </div>

                  <textarea
                    rows={12}
                    value={essayAnswer}
                    onChange={(e) => setEssayAnswer(e.target.value)}
                    placeholder="Organize your writing into clear paragraphs: Introduction (hook + thesis), Body paragraphs with topic sentences, and Conclusion (restatement + final reflection)..."
                    className="w-full p-4 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 font-sans leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* TAB CONTENT: 6. CAPSTONE ACADEMIC RESEARCH DEFENSE (BACCALAUREATE) */}
            {activeSectionTab === 'research' && activeExam.academicResearchTask && (
              <div className="bg-white rounded-xl border border-purple-200 p-6 space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-700" />
                    <h3 className="font-bold text-base text-purple-950">
                      {activeExam.academicResearchTask.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200 font-mono">
                    {activeExam.academicResearchTask.maxMarks || 6} Marks
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200/80 space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-900 block">
                    1. Thesis Formulation Prompt:
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                    {activeExam.academicResearchTask.thesisPrompt}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    2. Empirical Telemetry & Evidence Data:
                  </span>
                  <p className="text-sm font-mono text-slate-800 bg-white p-3.5 rounded-lg border border-slate-200">
                    "{activeExam.academicResearchTask.evidenceData}"
                  </p>
                  <p className="text-xs text-slate-500 pt-1 font-medium">
                    {activeExam.academicResearchTask.citationPrompt}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-bold text-slate-700 block">
                      3. Candidate Oral / Written Defense Draft:
                    </label>
                    <span className="font-mono text-purple-800">
                      {researchAnswer.trim().split(/\s+/).filter(Boolean).length} words
                    </span>
                  </div>
                  <textarea
                    rows={6}
                    value={researchAnswer}
                    onChange={(e) => setResearchAnswer(e.target.value)}
                    placeholder="Draft your scholarly thesis statement, integrate the empirical citation, and defend your argument in elevated academic register..."
                    className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-900 text-sm leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* Bottom Floating Navigation bar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center justify-between shadow-sm">
              <button
                onClick={() => {
                  if (activeSectionTab === 'research') setActiveSectionTab('writing');
                  else if (activeSectionTab === 'writing') setActiveSectionTab('story');
                  else if (activeSectionTab === 'story') setActiveSectionTab('translation');
                  else if (activeSectionTab === 'translation') setActiveSectionTab('reading');
                  else if (activeSectionTab === 'reading') setActiveSectionTab('mcq');
                }}
                disabled={activeSectionTab === 'mcq'}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Section</span>
              </button>

              <button
                onClick={() => {
                  if (activeSectionTab === 'mcq' && activeExam.reading) setActiveSectionTab('reading');
                  else if ((activeSectionTab === 'reading' || activeSectionTab === 'mcq') && activeExam.translation) setActiveSectionTab('translation');
                  else if ((activeSectionTab === 'translation' || activeSectionTab === 'reading' || activeSectionTab === 'mcq') && activeExam.storyQuestions) setActiveSectionTab('story');
                  else if (activeSectionTab === 'story' && activeExam.writingTask) setActiveSectionTab('writing');
                  else if (activeSectionTab === 'writing' && activeExam.academicResearchTask) setActiveSectionTab('research');
                  else setShowSubmitConfirmModal(true);
                }}
                className="px-5 py-2 text-xs font-bold rounded-lg bg-blue-900 hover:bg-blue-800 text-white flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
              >
                <span>{(activeSectionTab === 'writing' && !activeExam.academicResearchTask) || activeSectionTab === 'research' ? 'Review & Submit' : 'Next Section'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ); })()}

        {/* EVALUATING VIEW */}
        {examState === 'evaluating' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-900 border-t-transparent animate-spin mx-auto" />
            <h3 className="text-xl font-bold text-slate-900">
              AI Assessment in Progress...
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              يقوم نظام التقييم الذكي الآن بتصحيح إجابات القصة المقالية والمقال بالرجوع إلى المعايير الوزارية الرسمية
              (الأفكار، القواعد، الثراء اللغوي، والترابط). يرجى الانتظار بضع ثوانٍ...
            </p>
          </div>
        )}

        {/* RESULT VIEW */}
        {examState === 'result' && activeExam && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
              <div className="text-center space-y-2 border-b border-slate-100 pb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                  percentage >= 70 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {percentage >= 70 ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  <span>{percentage >= 70 ? 'PASSED · تم اجتياز الامتحان بنجاح' : 'NEEDS IMPROVEMENT · لم يتم الوصول لنسبة 70%'}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {percentage >= 70 ? 'تهانينا! أحسنت صنعاً' : 'فرصة أخرى للتعلم والإتقان'}
                </h2>
                <p className="text-sm text-slate-600">
                  نتيجتك في امتحان {activeExam.levelTitle}
                </p>

                {/* Official Student Performance Certificate Card */}
                <div className="mt-3 mx-auto max-w-lg bg-gradient-to-r from-blue-50/80 via-slate-50 to-blue-50/80 border border-blue-200 rounded-xl p-3.5 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Student Name</span>
                        <strong className="text-sm font-bold text-slate-900">{studentName || 'Registered Student'}</strong>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Group / Class</span>
                      <strong className="text-sm font-bold text-blue-900">{studentGroup || 'General Group'}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-blue-900 font-mono tabular-nums">{percentage}%</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Overall Percentage</div>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div className="text-center">
                    <div className="text-4xl font-extrabold text-slate-800 font-mono tabular-nums">{totalEarned} / {totalMax}</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase mt-0.5">Total Marks</div>
                  </div>
                </div>

                {percentage >= 70 && activeExam.level < 5 && (activeExam.category === 'unit_level' || !activeExam.category) && (
                  <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                    🎉 تم فتح المستوى التالي: <strong>Level {activeExam.level + 1}</strong> بنجاح!
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 block">MCQs & Translation</span>
                  <span className="text-xl font-bold text-slate-900 font-mono">{mcqScore} Marks</span>
                </div>

                {activeExam.storyQuestions && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Novel Critical Thinking</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">
                      {Object.values(storyEvaluations).reduce((acc, curr) => acc + curr.score, 0)} Marks
                    </span>
                  </div>
                )}

                {essayEvaluation && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <span className="text-xs text-slate-500 block">Writing Task</span>
                    <span className="text-xl font-bold text-slate-900 font-mono">{essayEvaluation.totalScore} / 14</span>
                  </div>
                )}

                {researchEvaluation && (
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
                    <span className="text-xs text-purple-700 block">Capstone Research</span>
                    <span className="text-xl font-bold text-purple-950 font-mono">
                      {researchEvaluation.score} / {researchEvaluation.maxScore}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => {
                    const scoreMsg =
                      `🎓 نتيجة اختبار اللغة الإنجليزية الرسمية - English Quiz App\n` +
                      `الأستاذ / محمد المنشاوي (Mr. Mohammad El-Menshawy)\n` +
                      `👤 اسم الطالب: ${studentName || 'غير مسجل'}\n` +
                      `🏫 المجموعة / الفصل: ${studentGroup || 'الصف الأول الثانوي'}\n` +
                      `📝 الامتحان: ${activeExam.levelTitle} (${activeExam.governorate || `Unit ${activeExam.unitId}`})\n` +
                      `📊 النتيجة الإجمالية: ${totalEarned} من ${totalMax} (${percentage}%)\n` +
                      `\n` +
                      `🔗 رابط منصة الاختبارات:\n` +
                      `${window.location.origin}`;
                    setShareCustomText(scoreMsg);
                    setShowShareModal(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <QrCode className="w-4 h-4" />
                  <span>إرسال النتيجة ورمز QR عبر واتساب (WhatsApp & QR)</span>
                </button>

                <button
                  onClick={() => {
                    setCertificateData({
                      studentName: student?.name || studentName || 'Student Name',
                      studentSchool: student?.school || 'Secondary School',
                      studentGrade: student?.grade || '1st Secondary',
                      examTitle: activeExam.levelTitle,
                      score: totalEarned,
                      maxMarks: totalMax,
                      percentage: percentage,
                      dateStr: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
                    });
                    setShowCertificateModal(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Award className="w-4 h-4 fill-current" />
                  <span>معاينة وطباعة الشهادة المعتمدة (Certificate)</span>
                </button>

                <button
                  onClick={() => setExamState('review')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Review Answers with Model Explanations (مراجعة الإجابات والشرح)</span>
                </button>
                <button
                  onClick={() => setExamState('lobby')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Return to Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DETAILED ANSWER REVIEW VIEW */}
        {examState === 'review' && activeExam && (
          <div className={`space-y-8 ${isPrintMode ? 'print-container' : 'max-w-4xl mx-auto'}`}>
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-xs font-bold text-blue-900 uppercase">
                  {isPrintMode ? 'جمهورية مصر العربية · وزارة التربية والتعليم والتعليم الفني' : 'Post-Exam Analytical Review'}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  {activeExam.levelTitle}
                </h2>
                <div className="text-xs text-slate-500 mt-1">
                  {activeExam.governorate || activeExam.levelTitleAr}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSafePrintExam}
                  className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Export Paper</span>
                </button>
                <button
                  onClick={() => { setExamState('lobby'); setIsPrintMode(false); }}
                  className="px-3.5 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Exit Review</span>
                </button>
              </div>
            </div>

            {/* Print Header */}
            {isPrintMode && (
              <div className="bg-white border-2 border-slate-900 p-6 rounded-lg space-y-3 font-serif">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Ministry of Education & Technical Education</span>
                  <span>الصف الأول الثانوي - اختبار شهادة إتمام الدراسة</span>
                </div>
                <div className="text-center font-bold text-base uppercase tracking-wider">
                  English Language Official Directorate Examination
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs pt-2 border-t border-slate-300">
                  <div>Student Name: <strong>{studentName || '_______________________'}</strong></div>
                  <div>Group / Class: <strong>{studentGroup || '___________'}</strong></div>
                  <div>Directorate: <strong>{activeExam.governorate || 'Ministry Standard'}</strong></div>
                </div>
              </div>
            )}

            {/* MCQs Review */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2">
                1. Vocabulary & Structure Questions & Explanations
              </h3>

              {activeExam.mcqs.map((q, idx) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  index={idx}
                  selectedAnswers={mcqAnswers[q.id] || []}
                  isReviewMode={true}
                  onSpeakText={handleSpeakText}
                />
              ))}
            </div>

            {/* Reading Comprehension Review */}
            {activeExam.reading && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>2. Reading Comprehension Passage & Analysis (Split-View)</span>
                  <span className="text-xs text-blue-900 font-semibold">Interactive Dual-Column Review</span>
                </h3>

                <ReadingComprehensionSplitView
                  reading={activeExam.reading}
                  allReadingPassages={activeExam.readingPassages}
                  selectedAnswers={mcqAnswers}
                  onSpeakText={handleSpeakText}
                  isReviewMode={true}
                />
              </div>
            )}

            {/* Translation Review */}
            {activeExam.translation && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2">
                  3. Translation Benchmark
                </h3>

                {activeExam.translation.map((t, idx) => (
                  <div key={t.id} className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
                    <span className="text-xs font-bold text-blue-900">
                      {idx + 1}. {t.direction === 'en-to-ar' ? 'English to Arabic' : 'Arabic to English'}
                    </span>
                    <div className="p-3 bg-slate-50 rounded text-sm font-semibold text-slate-900" dir={t.direction === 'ar-to-en' ? 'rtl' : 'ltr'}>
                      "{t.sourceText}"
                    </div>
                    <div className="p-3 bg-emerald-50 rounded border border-emerald-200 text-xs text-emerald-900" dir={t.direction === 'en-to-ar' ? 'rtl' : 'ltr'}>
                      <strong>Correct Translation:</strong> {t.options[t.correctIndex]}
                    </div>
                    {t.exam_trap_explanation && (
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                        <strong>Exam Trap Analysis:</strong> {t.exam_trap_explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Story Review */}
            {activeExam.storyQuestions && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2">
                  4. Novel: {activeExam.grade === 11 ? 'King Lear' : activeExam.grade === 12 ? 'Great Expectations' : 'The Old Man and the Sea'} (Model Benchmark & Rubric)
                </h3>

                {activeExam.storyQuestions.map((st, idx) => {
                  const evalRes = storyEvaluations[st.id];

                  return (
                    <div key={st.id} className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="font-bold text-slate-900 text-sm md:text-base">
                          Question {idx + 1}: {st.question}
                        </div>
                        {evalRes && (
                          <span className="text-xs font-bold text-blue-900 font-mono bg-blue-50 px-2.5 py-1 rounded">
                            Score: {evalRes.score} / {st.maxMarks}
                          </span>
                        )}
                      </div>

                      {storyAnswers[st.id] && (
                        <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700">
                          <span className="font-semibold block text-slate-900 mb-1">Your Submission:</span>
                          <p>{storyAnswers[st.id]}</p>
                        </div>
                      )}

                      <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-950 space-y-1">
                        <span className="font-bold block text-emerald-900">Official Ministry Model Answer (الإجابة النموذجية):</span>
                        <p className="leading-relaxed">{st.modelAnswer}</p>
                      </div>

                      {evalRes?.feedback && (
                        <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-lg text-xs text-slate-700 whitespace-pre-line" dir="rtl">
                          {evalRes.feedback}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Writing Task Review */}
            {activeExam.writingTask && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2">
                  5. Writing Evaluation & Model Benchmark
                </h3>

                <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      {activeExam.writingTask.title}
                    </h4>
                    {essayEvaluation && (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-mono">
                        Score: {essayEvaluation.totalScore} / 14
                      </span>
                    )}
                  </div>

                  {essayEvaluation && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded border text-center">
                        <span className="text-slate-500 block">Ideas:</span>
                        <span className="font-bold">{essayEvaluation.ideasScore} / 4</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded border text-center">
                        <span className="text-slate-500 block">Grammar:</span>
                        <span className="font-bold">{essayEvaluation.grammarVocabScore} / 4</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded border text-center">
                        <span className="text-slate-500 block">Organization:</span>
                        <span className="font-bold">{essayEvaluation.organizationScore} / 3</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded border text-center">
                        <span className="text-slate-500 block">Mechanics:</span>
                        <span className="font-bold">{essayEvaluation.mechanicsScore} / 3</span>
                      </div>
                    </div>
                  )}

                  {essayAnswer && (
                    <div className="p-3.5 bg-slate-50 rounded-lg text-xs text-slate-700">
                      <span className="font-semibold block text-slate-900 mb-1">Your Submission:</span>
                      <p className="whitespace-pre-line font-serif">{essayAnswer}</p>
                    </div>
                  )}

                  <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-950 space-y-1.5">
                    <span className="font-bold block text-blue-900">Curriculum Benchmark Model Response:</span>
                    <p className="leading-relaxed font-serif whitespace-pre-line">{activeExam.writingTask.modelResponse}</p>
                  </div>

                  {essayEvaluation?.feedback && (
                    <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 whitespace-pre-line" dir="rtl">
                      {essayEvaluation.feedback}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Academic Research Task Review (Baccalaureate) */}
            {activeExam.academicResearchTask && (
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>6. Academic Research & Thesis Defense Benchmark</span>
                  <span className="text-xs text-purple-900 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    Collegiate Rigor
                  </span>
                </h3>
                <div className="bg-white rounded-xl border border-purple-200 p-6 space-y-4 shadow-xs">
                  <h4 className="font-bold text-purple-950 text-sm md:text-base">
                    {activeExam.academicResearchTask.title}
                  </h4>
                  <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-200 text-xs text-purple-950 space-y-2">
                    <span className="font-bold block">Prompt & Empirical Telemetry:</span>
                    <p className="font-semibold text-slate-900">{activeExam.academicResearchTask.thesisPrompt}</p>
                    <p className="font-mono text-slate-700 bg-white p-2.5 rounded border border-purple-100">
                      "{activeExam.academicResearchTask.evidenceData}"
                    </p>
                  </div>
                  {researchAnswer && (
                    <div className="p-3.5 bg-purple-50/40 border border-purple-200 rounded-lg text-xs text-slate-800">
                      <span className="font-bold block text-purple-950 mb-1">Your Submitted Defense:</span>
                      <p className="whitespace-pre-line font-serif">{researchAnswer}</p>
                    </div>
                  )}
                  {researchEvaluation && (
                    <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs text-emerald-950 space-y-1">
                      <span className="font-bold block">
                        Research Defense Score: {researchEvaluation.score} / {researchEvaluation.maxScore}
                      </span>
                      <p dir="rtl">{researchEvaluation.feedback}</p>
                    </div>
                  )}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5">
                    <span className="font-bold text-slate-900 block">Collegiate Model Defense:</span>
                    <p className="leading-relaxed font-serif text-slate-800 whitespace-pre-line">
                      {activeExam.academicResearchTask.modelDefense}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    )}

      {/* IN-APP SUBMIT EXAM CONFIRMATION MODAL (Replaces blocking window.confirm) */}
      {showSubmitConfirmModal && activeExam && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-exam-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 id="submit-exam-modal-title" className="font-black text-base text-slate-900">
                  تأكيد تسليم الامتحان للتصحيح
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {activeExam.levelTitle}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div>
                • الأسئلة الاختيارية المجابة:{' '}
                <strong className="text-blue-900">{Object.keys(mcqAnswers).length}</strong> من{' '}
                <strong>
                  {activeExam.mcqs.length + (activeExam.reading?.questions?.length || 0)}
                </strong>
              </div>
              {activeExam.writingTask && (
                <div>
                  • المقال المكتوب:{' '}
                  <strong className="text-blue-900">
                    {essayAnswer.trim().split(/\s+/).filter(Boolean).length} كلمة
                  </strong>
                </div>
              )}
              {activeExam.academicResearchTask && (
                <div>
                  • المرافعة البحثية:{' '}
                  <strong className="text-purple-900">
                    {researchAnswer.trim().split(/\s+/).filter(Boolean).length} كلمة
                  </strong>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              هل أنت متأكد من رغبتك في إنهاء الامتحان الآن وإرساله للتصحيح الفوري؟
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitConfirmModal(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold cursor-pointer"
              >
                مراجعة الإجابات أولاً
              </button>
              <button
                type="button"
                onClick={() => handleSubmitExam()}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-sm cursor-pointer"
              >
                تأكيد التسليم والتصحيح ✅
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IN-APP EXIT ACTIVE EXAM CONFIRMATION MODAL (Prevents accidental Android Back loss) */}
      {showExitExamConfirmModal && activeExam && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-exam-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200" dir="rtl">
            <h3 id="exit-exam-modal-title" className="font-black text-base text-slate-900">
              تنبيه: الامتحان قيد التنفيذ حالياً
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              إذا غادرت صفحة الامتحان الآن قبل التسليم، سيتم إلغاء المحاولة الحالية. هل تود متابعة الحل أم الخروج؟
            </p>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExitExamConfirmModal(false)}
                className="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-black cursor-pointer"
              >
                متابعة الامتحان
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitExamConfirmModal(false);
                  stopSpeaking();
                  setExamState('lobby');
                }}
                className="px-4 py-2.5 rounded-xl border border-red-300 text-red-700 hover:bg-red-50 text-xs font-bold cursor-pointer"
              >
                خروج وإلغاء المحاولة
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PERSISTENT STUDENT REGISTRATION & ONBOARDING MODAL */}
      <StudentRegistrationModal
        isOpen={showRegistrationModal}
        isFirstLaunch={isFirstLaunch}
        currentStudent={student}
        onClose={() => {
          setShowRegistrationModal(false);
          setPendingExam(null);
        }}
        onSaved={handleStudentSaved}
      />

      {/* PWA INSTALL MODAL FOR ANDROID & IPHONE */}
      <InstallAppModal
        isOpen={showInstallModal}
        onClose={() => setShowInstallModal(false)}
        isInstallable={isInstallable}
        isIOS={isIOS}
        isAndroid={isAndroid}
        onInstall={install}
      />

      {/* WHATSAPP & QR CODE SHARE MODAL */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        customText={shareCustomText}
        studentName={studentName}
        studentGroup={studentGroup}
      />

      {/* OFFICIAL CERTIFICATE MODAL */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        data={certificateData}
      />

      {/* REDESIGNED BRAND FOOTER (Deep Midnight Navy #07224D) */}
      <Footer
        onNavigateTab={(tab) => {
          setCurrentAppTab(tab);
          setExamState('lobby');
          setIsPrintMode(false);
        }}
      />

      {/* FIXED MOBILE BOTTOM NAVIGATION BAR */}
      <BottomNavBar
        activeTab={currentAppTab}
        onTabChange={(tab) => {
          setCurrentAppTab(tab);
          setExamState('lobby');
          setIsPrintMode(false);
        }}
        student={student}
      />
    </div>
  );
}
