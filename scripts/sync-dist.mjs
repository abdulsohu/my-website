import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const dist = join(root, "dist");

if (!existsSync(dist)) {
  throw new Error("dist/ does not exist. Run `pnpm build` first.");
}

const generatedEntries = [
  "_astro",
  "figures",
  "posts",
  "writing",
  "index.html",
  "404.html",
  "CNAME",
  ".nojekyll",
];

for (const entry of generatedEntries) {
  const target = join(root, entry);
  if (existsSync(target)) {
    rmSync(target, { recursive: true, force: true });
  }
}

for (const entry of readdirSync(dist, { withFileTypes: true })) {
  const source = join(dist, entry.name);
  const target = join(root, entry.name);

  if (entry.isDirectory()) {
    mkdirSync(target, { recursive: true });
    cpSync(source, target, { recursive: true });
  } else {
    cpSync(source, target);
  }
}

console.log("Synced dist/ into the repository root for branch-based GitHub Pages.");
