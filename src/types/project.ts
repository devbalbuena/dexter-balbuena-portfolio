export type ProjectCategory =
  | "ecommerce-research"
  | "excel-sheets"
  | "web-system"
  | "graphic-design"
  | "social-media"
  | "admin-docs";

export interface ProjectMedia {
  type: "image" | "video" | "embed";
  url: string;
  alt: string;
  caption?: string;
  isBeforeAfter?: boolean;
}

export interface ProjectLinks {
  liveUrl?: string;
  githubUrl?: string;
  sheetPreviewUrl?: string;
  canvaPreviewUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  whatIDid: string[];
  /**
   * Only real, verified results. If unverified or educational, omit or note clearly.
   */
  result?: string;
  /**
   * If a result/metric placeholder is needed for demonstration, it is explicitly flagged.
   */
  resultPlaceholder?: string;
  tools: string[];
  date: string;
  featured: boolean;
  media: ProjectMedia[];
  links?: ProjectLinks;
  /**
   * Clarifies whether this is a personal project, school build, or family store system.
   */
  projectType: "family-business" | "school-capstone" | "independent-research" | "web-system";
  isDemoSample?: boolean;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "ecommerce-research": "E-Commerce Research",
  "excel-sheets": "Excel & Sheets",
  "web-system": "Web Systems",
  "graphic-design": "Graphic Design",
  "social-media": "Social Media",
  "admin-docs": "Admin & Documentation",
};
