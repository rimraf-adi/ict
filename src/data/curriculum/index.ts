// Master Curriculum Registry - Hardcoded TypeScript Content Layer
// Completely eliminates fs.readFileSync and raw markdown rendering across all 24 modules

import { ModuleContent } from "./types";
import { OVERVIEW_MODULES } from "./overview";
import { FOUNDATIONS_MODULES } from "./foundations";
import { INTERMEDIATE_MODULES } from "./intermediate";
import { ADVANCED_MODULES } from "./advanced";
import { EXECUTION_MODELS_MODULES } from "./executionModels";
import { PRACTICE_MODULES } from "./practice";

export * from "./types";

export const ALL_CURRICULUM_CONTENT: Record<string, ModuleContent> = {
  ...OVERVIEW_MODULES,
  ...FOUNDATIONS_MODULES,
  ...INTERMEDIATE_MODULES,
  ...ADVANCED_MODULES,
  ...EXECUTION_MODELS_MODULES,
  ...PRACTICE_MODULES,
};

export function getCurriculumContent(level: string, slug: string): ModuleContent | null {
  const module = ALL_CURRICULUM_CONTENT[slug];
  if (!module) return null;
  return module;
}
