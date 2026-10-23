import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { 
  getModuleBySlug, 
  getAllModules,
  getAdjacentModules 
} from "@/lib/ict-content";
import { getCurriculumContent } from "@/data/curriculum";
import CurriculumSectionRenderer from "@/components/learn/CurriculumSectionRenderer";
import KnowledgeQuiz from "@/components/learn/KnowledgeQuiz";
import { 
  ChevronRight, 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  Sparkles,
  Layers
} from "lucide-react";

interface ModulePageProps {
  params: Promise<{
    level: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allModules = getAllModules();
  return allModules.map((m) => ({
    level: m.level,
    slug: m.slug,
  }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { level, slug } = await params;
  const moduleData = getModuleBySlug(level, slug);

  if (!moduleData) {
    notFound();
  }

  const { prev, next } = getAdjacentModules(slug);
  const curriculumData = getCurriculumContent(level, slug);

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-white flex flex-col antialiased selection:bg-amber-400/20 selection:text-white">
      <Navbar />

      {/* Sticky Reader Navigation Bar */}
      <nav className="sticky top-16 z-40 border-b border-white/[0.08] bg-[#0c0d0f]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/50 font-sans overflow-hidden whitespace-nowrap">
            <Link href="/learn" className="hover:text-white transition-colors">
              Curriculum
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white/50 truncate">{moduleData.levelTitle}</span>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-semibold truncate">{moduleData.title}</span>
          </div>

          {/* Quick Prev / Next links */}
          <div className="flex items-center gap-4 text-xs shrink-0">
            {prev && (
              <Link
                href={`/learn/${prev.level}/${prev.slug}`}
                className="hidden sm:flex items-center gap-1 text-white/50 hover:text-white transition-colors"
                title={prev.title}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Prev</span>
              </Link>
            )}
            {next && (
              <Link
                href={`/learn/${next.level}/${next.slug}`}
                className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
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
        <header className="space-y-4 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/50">
            <span className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-semibold">
              {moduleData.levelTitle}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-sans">
              <Clock className="h-3.5 w-3.5 text-white/40" />
              <span>{moduleData.estimatedReadTime} min read</span>
            </span>
            {moduleData.prerequisites && moduleData.prerequisites.length > 0 && (
              <>
                <span>·</span>
                <span className="font-sans">Prerequisites: {moduleData.prerequisites.join(", ")}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            {moduleData.title}
          </h1>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
            {moduleData.description}
          </p>
        </header>

        {/* Executive Key Takeaways Card */}
        {moduleData.keyTakeaways && moduleData.keyTakeaways.length > 0 && (
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Core Institutional Takeaways</span>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70 font-sans">
              {moduleData.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-amber-400 mt-1 font-bold text-sm leading-none">•</span>
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hardcoded TypeScript Curriculum Architecture with High-Precision Vector Schematics */}
        <article className="space-y-8 text-white/80">
          {curriculumData && curriculumData.sections && curriculumData.sections.length > 0 ? (
            curriculumData.sections.map((section, idx) => (
              <CurriculumSectionRenderer
                key={section.id || idx}
                section={section}
                index={idx}
              />
            ))
          ) : (
            <div className="p-8 text-center text-white/40 font-mono text-sm bg-white/[0.02] rounded-xl border border-white/[0.08]">
              Curriculum specifications loaded.
            </div>
          )}
        </article>

        {/* Interactive Knowledge Verification Quiz */}
        {moduleData.quiz && moduleData.quiz.length > 0 && (
          <section className="pt-8 border-t border-white/[0.08]">
            <KnowledgeQuiz
              moduleSlug={moduleData.slug}
              moduleTitle={moduleData.title}
              questions={moduleData.quiz}
              nextModuleUrl={next ? `/learn/${next.level}/${next.slug}` : undefined}
            />
          </section>
        )}

        {/* Bottom Pagination Links */}
        <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/learn/${prev.level}/${prev.slug}`}
              className="flex-1 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
            >
              <div className="text-[11px] font-mono text-white/40 mb-1">← PREVIOUS MODULE</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                {prev.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              href={`/learn/${next.level}/${next.slug}`}
              className="flex-1 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all text-right group"
            >
              <div className="text-[11px] font-mono text-amber-400 mb-1">NEXT MODULE →</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                {next.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </footer>

      </main>
    </div>
  );
}
