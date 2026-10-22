import fs from "fs";
import path from "path";

export function getModuleContent(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), "docs/ict", filePath);
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, "utf-8");
    }
    return `# Content unavailable\n\nCould not locate ${filePath}.`;
  } catch (error) {
    console.error("Error reading module content:", error);
    return `# Error Loading Content\n\nUnable to read file at ${filePath}.`;
  }
}
