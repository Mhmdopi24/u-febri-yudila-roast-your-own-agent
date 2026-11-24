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

// Gate constraint (sealed scorer): entry.txt must be UTF-8 text of
// 1–200 characters and not only whitespace. This line is 163 characters,
// so it passes as-is — keep any future edit of the wording within that
// budget or the entry is invalid before judging starts.
const LINE =
  "My agent apologized six times, said \"Great question!\" twice, and confidently summarized a meeting it never attended — with action items for people who don't exist.";

const ENTRY_FILE = "entry.txt";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), LINE + "\n", "utf8");
