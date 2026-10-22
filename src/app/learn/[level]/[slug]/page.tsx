import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import CurriculumSectionRenderer from "@/components/learn/CurriculumSectionRenderer";
import KnowledgeQuiz from "@/components/learn/KnowledgeQuiz";
import {
  getModuleBySlug,
  getAllModules,
  getNextAndPrevModule,
} from "@/lib/ict-content";
import { getCurriculumContent } from "@/data/curriculum";
import {
  ChevronRight,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    level: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const modules = getAllModules();
  return modules.map((m) => ({
    level: m.level,
    slug: m.slug,
  }));
}

export default async function ModuleReaderPage({ params }: PageProps) {
  const { level, slug } = await params;
  const moduleData = getModuleBySlug(level, slug);

  if (!moduleData || moduleData.level !== level) {
    notFound();
  }

  const { prev, next } = getNextAndPrevModule(level, slug);
  const curriculumData = getCurriculumContent(level, slug);

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-zinc-900 flex flex-col antialiased selection:bg-amber-500/20 selection:text-zinc-900">
      <Navbar />

      {/* Sticky Reader Navigation Bar */}
      <nav className="sticky top-16 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans overflow-hidden whitespace-nowrap">
            <Link href="/learn" className="hover:text-zinc-900 transition-colors">
              Curriculum
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-400" />
            <span className="text-zinc-500 truncate">{moduleData.levelTitle}</span>
            <ChevronRight className="h-3 w-3 text-zinc-400" />
            <span className="text-zinc-900 font-semibold truncate">{moduleData.title}</span>
          </div>

          {/* Quick Prev / Next links */}
          <div className="flex items-center gap-4 text-xs shrink-0">
            {prev && (
              <Link
                href={`/learn/${prev.level}/${prev.slug}`}
                className="hidden sm:flex items-center gap-1 text-zinc-500 hover:text-zinc-900 transition-colors"
                title={prev.title}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Prev</span>
              </Link>
            )}
            {next && (
              <Link
                href={`/learn/${next.level}/${next.slug}`}
                className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
                title={next.title}
              >
                <span>Next</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Main Reading Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">
        
        {/* Module Header */}
        <header className="space-y-4 pb-6 border-b border-zinc-200">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 font-semibold">
              {moduleData.levelTitle}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-sans">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              <span>{moduleData.estimatedReadTime} min read</span>
            </span>
            {moduleData.prerequisites && moduleData.prerequisites.length > 0 && (
              <>
                <span>·</span>
                <span className="font-sans">Prerequisites: {moduleData.prerequisites.join(", ")}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            {moduleData.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            {moduleData.description}
          </p>
        </header>

        {/* Executive Key Takeaways Card */}
        {moduleData.keyTakeaways && moduleData.keyTakeaways.length > 0 && (
          <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-orange-50/40 p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Core Institutional Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm text-zinc-700 font-sans">
              {moduleData.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-1 font-bold text-sm leading-none">•</span>
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hardcoded TypeScript Curriculum Architecture with High-Precision Vector Schematics */}
        <article className="space-y-8">
          {curriculumData && curriculumData.sections && curriculumData.sections.length > 0 ? (
            curriculumData.sections.map((section, idx) => (
              <CurriculumSectionRenderer
                key={section.id || idx}
                section={section}
                index={idx}
              />
            ))
          ) : (
            <div className="p-8 text-center text-zinc-500 font-mono text-sm bg-white rounded-xl border border-zinc-200">
              Curriculum specifications loaded.
            </div>
          )}
        </article>

        {/* Interactive Knowledge Verification Quiz */}
        {moduleData.quiz && moduleData.quiz.length > 0 && (
          <section className="pt-8 border-t border-zinc-200">
            <KnowledgeQuiz
              moduleSlug={moduleData.slug}
              moduleTitle={moduleData.title}
              questions={moduleData.quiz}
              nextModuleUrl={next ? `/learn/${next.level}/${next.slug}` : undefined}
            />
          </section>
        )}

        {/* Bottom Pagination Links */}
        <footer className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/learn/${prev.level}/${prev.slug}`}
              className="flex-1 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all group"
            >
              <div className="text-[11px] font-mono text-zinc-400 mb-1">← PREVIOUS MODULE</div>
              <div className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors truncate">
                {prev.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              href={`/learn/${next.level}/${next.slug}`}
              className="flex-1 p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all text-right group"
            >
              <div className="text-[11px] font-mono text-amber-600 mb-1">NEXT MODULE →</div>
              <div className="text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors truncate">
                {next.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </footer>

      </main>
    </div>
  );
}
