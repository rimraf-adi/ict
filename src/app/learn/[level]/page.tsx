import { redirect } from "next/navigation";
import { getModulesByLevel, normalizeLevelSlug } from "@/lib/ict-content";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { level: "overview" },
    { level: "foundations" },
    { level: "intermediate" },
    { level: "advanced" },
    { level: "execution-models" },
    { level: "practice" },
    { level: "00-OVERVIEW" },
    { level: "01-FOUNDATIONS" },
    { level: "02-INTERMEDIATE" },
    { level: "03-ADVANCED" },
    { level: "04-EXECUTION-MODELS-AND-STRATEGIES" },
    { level: "05-PRACTICE-AND-DRILLS" },
  ];
}

export default async function LevelIndexPage({ params }: PageProps) {
  const { level } = await params;
  const normalized = normalizeLevelSlug(level);
  const modules = getModulesByLevel(normalized);

  if (modules.length > 0) {
    redirect(`/learn/${modules[0].level}/${modules[0].slug}`);
  }

  // Fallback to learn main page if level not found
  redirect("/learn");
}
