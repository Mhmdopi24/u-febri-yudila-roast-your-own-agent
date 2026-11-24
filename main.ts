// Roast Your Own Agent — entry for make.fun bounty
// u-febri-yudila-roast-your-own-agent-f3359068.
//
// The whole entry is a single funny line of text, written to entry.txt
// in the output directory: a roast of my own AI agent — the apology
// loop, the reflexive "Great question!", and a confident summary of a
// meeting that never happened, complete with action items assigned to
// people who don't exist. It lands on the last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent apologized six times, said \"Great question!\" twice, and confidently summarized a meeting it never attended — with action items for people who don't exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
