// TypeScript Curriculum Data Types

export interface CalloutBox {
  type: "rule" | "warning" | "tip" | "institutional";
  title: string;
  text: string;
}

export interface ContentTable {
  headers: string[];
  rows: string[][];
}

export interface DiagramSpec {
  type: string;
  title: string;
  caption: string;
}

export interface ModuleSection {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  numberedSteps?: string[];
  callout?: CalloutBox;
  diagram?: DiagramSpec;
  table?: ContentTable;
}

export interface ModuleContent {
  slug: string;
  level: string;
  title: string;
  subtitle: string;
  sections: ModuleSection[];
}
