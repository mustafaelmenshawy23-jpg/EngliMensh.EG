import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Sparkles, Printer, Share2, MessageCircle, BookOpen, User, CheckCircle2 } from 'lucide-react';
import { StudentProfile, ExamHistoryRecord } from '../types.ts';
import { BaroqueCertificate, BaroqueCertificateData } from './BaroqueCertificate.tsx';

interface LeaderboardViewProps {
  student: StudentProfile | null;
  onOpenCertificate: (record: ExamHistoryRecord) => void;
  onOpenShareModal: () => void;
  onNavigateToExams: () => void;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  school: string;
  group: string;
  points: number;
  badge: string;
  isCurrentUser?: boolean;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  student,
  onOpenCertificate,
  onOpenShareModal,
  onNavigateToExams,
}) => {
  const currentPoints = student?.totalScore || 0;

  // Curated educational top leaderboard benchmark
  const topStudents: LeaderboardEntry[] = [
    { rank: 1, name: 'سارة أحمد محمود', school: 'مدرسة المتفوقين STEM', group: 'Group Alpha', points: 1420, badge: '👑' },
    { rank: 2, name: 'عمر خالد الصاوي', school: 'العباسية الثانوية بنين', group: 'Group A', points: 1280, badge: '🌟' },
    { rank: 3, name: 'مريم طارق النجار', school: 'الشهيد هشام بركات الثانوية', group: 'Group B', points: 1190, badge: '⚡' },
    { rank: 4, name: 'يوسف مصطفى عثمان', school: 'المنصورة الثانوية الرسمية', group: 'Group A', points: 1040, badge: '🎯' },
    { rank: 5, name: 'نور الدين وائل حسني', school: 'الإبراهيمية الثانوية', group: 'Group C', points: 960, badge: '📚' },
  ];

  // Calculate student rank relative to points
  const userRank =
    currentPoints >= 1420 ? 1 :
    currentPoints >= 1280 ? 2 :
    currentPoints >= 1190 ? 3 :
    currentPoints >= 1040 ? 4 :
    currentPoints >= 960 ? 5 : 6;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-950/40 text-amber-200 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 border border-amber-300/30">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Hall of Fame & Certificates</span>
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white">
              Secondary 1
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            لوحة شرف الأوائل والشهادات الرسمية
          </h1>

          <p className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
            تكريم الطلاب المتفوقين في امتحانات اللغة الإنجليزية للمرحلة الثانوية. كل اختبار أو لعبة تزيد من نقاطك وترفع رتبتك في صدارة الترتيب!
          </p>
        </div>

        {/* Current Student Standing Strip */}
        <div className="relative z-10 mt-6 bg-slate-950/60 rounded-2xl p-4 border border-amber-300/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shrink-0">
              #{userRank}
            </div>
            <div>
              <div className="text-xs text-amber-200">موقعك في لوحة الصدارة (Your Current Rank)</div>
              <div className="font-black text-base sm:text-lg text-white">
                {student?.name || 'Student Name'} · {currentPoints} Points
              </div>
            </div>
          </div>

          <button
            onClick={onOpenShareModal}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>مشاركة موقعك عبر واتساب (Share Rank)</span>
          </button>
        </div>
      </div>

      {/* HALL OF FAME TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Medal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">أوائل الطلبة والمتصدرين (Top Students)</h3>
              <p className="text-xs text-slate-500">الترتيب التنافسي المباشر بناءً على نتائج الامتحانات</p>
            </div>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
            Top 5 Honors
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {topStudents.map((st) => (
            <div
              key={st.rank}
              className={`py-3.5 px-3 flex items-center justify-between gap-3 rounded-2xl transition-colors ${
                st.rank === 1
                  ? 'bg-amber-50/50 border border-amber-200/50'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                    st.rank === 1
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : st.rank === 2
                      ? 'bg-slate-200 text-slate-800'
                      : st.rank === 3
                      ? 'bg-amber-700/20 text-amber-900'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {st.badge}
                </div>

                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span>{st.name}</span>
                    {st.rank === 1 && (
                      <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-amber-400 text-slate-950">
                        المركز الأول
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span>{st.school}</span>
                    <span>•</span>
                    <span className="font-medium text-slate-600">{st.group}</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-base sm:text-lg font-black font-mono text-amber-700 block">
                  {st.points} pts
                </span>
                <span className="text-[10px] text-slate-400">Rank #{st.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: شهاداتي (MY CERTIFICATES & HONORS) WITH INTERACTIVE LIVE PREVIEW */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                شهاداتي المعتمدة (My Certificates & Honors)
              </h3>
              <p className="text-xs text-slate-500">
                شهادات التميز الملكية المعتمدة رسمياً بإشراف مستر محمد المنشاوي مع إمكانية التحميل عالي الدقة والطباعة المباشرة
              </p>
            </div>
          </div>
        </div>

        {/* 1. INTERACTIVE LIVE PREVIEW CARD */}
        {(() => {
          const latestExam = student?.examHistory && student.examHistory.length > 0
            ? student.examHistory[student.examHistory.length - 1]
            : null;

          const previewData: BaroqueCertificateData = {
            studentName: student?.name || 'Student Name',
            studentSchool: student?.school || 'Egyptian Secondary School',
            studentGrade: student?.grade || '1st Secondary',
            examTitle: latestExam?.examTitle || '1st Secondary Curriculum Mastery Examination',
            score: latestExam?.score ?? 28,
            maxMarks: latestExam?.maxMarks ?? 32,
            percentage: latestExam?.percentage ?? 88,
            dateStr: latestExam?.completedAt
              ? new Date(latestExam.completedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
              : 'October 21, 2026',
          };

          return (
            <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-3 sm:p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between text-xs text-amber-300 font-bold px-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>معاينة الشهادة المباشرة (Live Certificate Preview)</span>
                </span>
                <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                  Fixed 16:9 Landscape · 1920x1080 Native Export
                </span>
              </div>

              <BaroqueCertificate
                data={previewData}
                showActions={true}
              />
            </div>
          );
        })()}

        {/* 2. COMPLETED EXAMS CERTIFICATES LIST */}
        <div className="pt-2 space-y-3">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span>سجل شهادات الاختبارات المكتملة ({student?.examHistory?.length || 0})</span>
          </h4>

          {student?.examHistory && student.examHistory.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {student.examHistory.map((rec) => (
                <div
                  key={rec.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between gap-3 hover:border-amber-400 transition-all hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                        {rec.examTitle}
                      </span>
                      <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full shrink-0 font-mono">
                        {rec.percentage}%
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
                      <span>الدرجة: {rec.score} من {rec.maxMarks}</span>
                      <span className="text-[10px] text-slate-400">{rec.completedAt ? new Date(rec.completedAt).toLocaleDateString() : ''}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCertificate(rec)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 hover:from-blue-900 hover:to-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>فتح وتصدير الشهادة (Open Certificate)</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 space-y-2 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-5">
              <Award className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                عند اجتيازك لأي امتحان، سيتم إصدار وتوثيق شهادتك الرسمية تلقائياً وإضافتها إلى هذا السجل!
              </p>
              <button
                onClick={onNavigateToExams}
                className="mt-2 px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>انتقل للاختبارات الآن (Start Exams)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
