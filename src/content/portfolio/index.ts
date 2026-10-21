import { portfolioCategories, portfolioProjects } from "./projects";
import type {
  PortfolioCategory,
  PortfolioCategoryId,
  PortfolioProject,
} from "./types";

export type {
  PortfolioCategory,
  PortfolioCategoryId,
  PortfolioProject,
} from "./types";
export { portfolioCategories, portfolioProjects };

export function getPortfolioProjectsByCategory(
  category: PortfolioCategoryId | "all",
): readonly PortfolioProject[] {
  if (category === "all") return portfolioProjects;
  return portfolioProjects.filter((p) => p.category === category);
}

/** Categories that currently have at least one project. */
export function getActivePortfolioCategories(): readonly PortfolioCategory[] {
  const used = new Set(portfolioProjects.map((p) => p.category));
  return portfolioCategories.filter((c) => used.has(c.id));
}
