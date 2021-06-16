import fs from "fs";
import path from "path";

// MDXVIEWS_PATH is useful when you want to get the path to a specific file
export const MDXVIEWS_PATH = path.join(process.cwd(), "views");

// getViewPaths is the list of all mdx files inside the MDXVIEWS_PATH directory
export const getViewPaths = fs
  .readdirSync(MDXVIEWS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
