import { labCategories, labProjects } from "./projects";
import type { LabCategory, LabCategoryId, LabProject } from "./types";

export type { LabCategory, LabCategoryId, LabProject, LabProjectDetail } from "./types";
export { labCategories, labProjects };

/** Categories that currently have at least one project (empty ones stay hidden). */
export function getActiveLabCategories(): readonly LabCategory[] {
  const used = new Set(labProjects.map((p) => p.category));
  return labCategories.filter((c) => used.has(c.id));
}

export function getLabProjectsByCategory(
  category: LabCategoryId | "all",
): readonly LabProject[] {
  if (category === "all") return labProjects;
  return labProjects.filter((p) => p.category === category);
}

export function getLabProjectBySlug(slug: string): LabProject | undefined {
  return labProjects.find((p) => p.slug === slug);
}

/** Only projects that opted into a detail page. */
export function getLabProjectsWithDetail(): readonly LabProject[] {
  return labProjects.filter((p) => Boolean(p.detail));
}
