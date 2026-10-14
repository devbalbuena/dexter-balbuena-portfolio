import fs from "fs";
import path from "path";
import { Project, ProjectCategory } from "@/types/project";
import { Certificate } from "@/types/certificate";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content", "projects");
const CERTIFICATES_DIRECTORY = path.join(process.cwd(), "content", "certificates");

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY).filter((file) => file.endsWith(".json"));
  const projects: Project[] = [];

  for (const fileName of fileNames) {
    const fullPath = path.join(PROJECTS_DIRECTORY, fileName);
    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const projectData = JSON.parse(fileContents) as Project;
      projects.push(projectData);
    } catch (err) {
      console.error(`Failed to parse project file ${fileName}:`, err);
    }
  }

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((p) => p.featured);
}

export async function getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((p) => p.category === category);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const allProjects = await getAllProjects();
  const project = allProjects.find((p) => p.slug === slug);
  return project || null;
}

export async function getAllCertificates(): Promise<Certificate[]> {
  if (!fs.existsSync(CERTIFICATES_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(CERTIFICATES_DIRECTORY).filter((file) => file.endsWith(".json"));
  const certificates: Certificate[] = [];

  for (const fileName of fileNames) {
    const fullPath = path.join(CERTIFICATES_DIRECTORY, fileName);
    try {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const certData = JSON.parse(fileContents) as Certificate;

      // Only pass certificateImage if the file exists on disk to avoid 404 image errors
      if (certData.certificateImage) {
        const relativeImgPath = certData.certificateImage.startsWith("/")
          ? certData.certificateImage.slice(1)
          : certData.certificateImage;
        const diskPath = path.join(process.cwd(), "public", relativeImgPath);
        if (!fs.existsSync(diskPath)) {
          certData.certificateImage = undefined;
        }
      }

      certificates.push(certData);
    } catch (err) {
      console.error(`Failed to parse certificate file ${fileName}:`, err);
    }
  }

  return certificates.sort((a, b) => new Date(b.issued).getTime() - new Date(a.issued).getTime());
}
