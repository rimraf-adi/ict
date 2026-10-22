"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { QuizQuestion } from "@/lib/ict-content";
import Link from "next/link";

interface KnowledgeQuizProps {
  moduleSlug: string;
  moduleTitle: string;
  questions: QuizQuestion[];
  nextModuleUrl?: string;
}

export default function KnowledgeQuiz({
  moduleSlug,
  moduleTitle,
  questions,
  nextModuleUrl,
}: KnowledgeQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Load previous completion state from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem("ict_completed_modules");
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        if (parsed[moduleSlug]) {
          setIsCompleted(true);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [moduleSlug]);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (submitted[questionIndex]) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));

    setSubmitted((prev) => {
      const nextSubmitted = { ...prev, [questionIndex]: true };
      
      const allDone = questions.every((_, qIdx) => nextSubmitted[qIdx] || qIdx === questionIndex);
      if (allDone) {
        try {
          const raw = localStorage.getItem("ict_completed_modules") || "{}";
          const parsed = JSON.parse(raw);
          parsed[moduleSlug] = {
            completedAt: new Date().toISOString(),
            score: calculateScore({ ...selectedAnswers, [questionIndex]: optionIndex }),
            total: questions.length,
          };
          localStorage.setItem("ict_completed_modules", JSON.stringify(parsed));
          setIsCompleted(true);
        } catch {
          // Ignore
        }
      }

      return nextSubmitted;
    });
  };

  const calculateScore = (answers = selectedAnswers) => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const currentScore = calculateScore();
  const allAnswered = questions.every((_, idx) => submitted[idx]);

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted({});
  };

  return (
    <section className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Knowledge Verification
          </div>
          <h3 className="mt-1 text-lg font-bold text-zinc-950">
            Concept Check ({questions.length} Questions)
          </h3>
          <p className="text-xs text-zinc-600 mt-0.5">
            Verify key mechanics before advancing to the next module.
          </p>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-3">
          <div className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 font-mono text-center">
            <div className="text-[10px] uppercase text-zinc-400">Score</div>
            <div className="text-sm font-bold text-zinc-900">
              {currentScore} / {questions.length}
            </div>
          </div>
          {allAnswered && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white hover:bg-zinc-100 px-2.5 py-1.5 text-xs text-zinc-700 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Retry</span>
            </button>
          )}
        </div>
      </div>

      {/* Questions List */}
      <div className="mt-6 space-y-6">
        {questions.map((q, qIndex) => {
          const isAnswered = submitted[qIndex];
          const chosen = selectedAnswers[qIndex];
          const isCorrect = isAnswered && chosen === q.correctAnswer;

          return (
            <div
              key={q.id}
              className="rounded-lg border border-zinc-200 bg-white p-5"
            >
              {/* Question Header */}
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-zinc-100 border border-zinc-200 font-mono text-xs font-semibold text-zinc-700">
                  {qIndex + 1}
                </span>
                <h4 className="text-sm font-semibold text-zinc-900 leading-snug">
                  {q.question}
                </h4>
              </div>

              {/* Options */}
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {q.options.map((opt, optIndex) => {
                  const isSelected = chosen === optIndex;
                  const isThisCorrect = optIndex === q.correctAnswer;

                  let buttonStyles =
                    "border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800";

                  if (isAnswered) {
                    if (isThisCorrect) {
                      buttonStyles =
                        "border-emerald-500 bg-emerald-50 text-emerald-950 font-medium ring-1 ring-emerald-500";
                    } else if (isSelected) {
                      buttonStyles =
                        "border-rose-400 bg-rose-50 text-rose-950 font-medium ring-1 ring-rose-400";
                    } else {
                      buttonStyles = "border-zinc-100 bg-zinc-50 text-zinc-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={optIndex}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(qIndex, optIndex)}
                      className={`flex items-start gap-2.5 rounded-md border p-3 text-left text-xs transition-colors ${buttonStyles}`}
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-zinc-300 bg-zinc-50 font-mono text-[10px] uppercase font-semibold text-zinc-600">
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span className="leading-snug">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Feedback */}
              {isAnswered && (
                <div
                  className={`mt-4 rounded-md border p-3.5 text-xs leading-relaxed ${
                    isCorrect
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-rose-200 bg-rose-50 text-rose-900"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold mb-1">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-700">Correct Understanding</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-rose-600" />
                        <span className="text-rose-700">Incorrect Understanding</span>
                      </>
                    )}
                  </div>
                  <p className="text-zinc-700">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {allAnswered && (
        <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono font-semibold uppercase text-zinc-500">
              {currentScore === questions.length
                ? "Perfect Score"
                : currentScore >= 2
                ? "Verification Passed"
                : "Review Recommended"}
            </div>
            <p className="text-sm font-medium text-zinc-900 mt-0.5">
              You scored {currentScore} of {questions.length} correct on this module.
            </p>
          </div>

          <div>
            {nextModuleUrl ? (
              <Link
                href={nextModuleUrl}
                className="flex items-center gap-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-xs font-medium text-white transition-colors"
              >
                <span>Next Module</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ) : (
              <Link
                href="/learn"
                className="flex items-center gap-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 px-4 py-2 text-xs font-medium text-white transition-colors"
              >
                <span>Curriculum Overview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
