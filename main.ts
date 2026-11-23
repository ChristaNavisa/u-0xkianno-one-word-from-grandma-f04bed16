// One Word From Grandma
// make.fun bounty: u-0xkianno-one-word-from-grandma-f04bed16
//
// Writes a single word (1-30 UTF-8 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt): the one word
// the entrant's grandma would text about AI. Runs on Node 22, no deps.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the word a warm, slightly baffled grandma would text about
// the new machine in the house. Not "robot" or "AI" — the obvious picks —
// but the word she reaches for when a gadget she does not understand
// does something clever on its own: a contraption.
const WORD = "contraption";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateWord(word: string): void {
  // Gate: 1-30 UTF-8 characters, not only whitespace, exactly one word.
  const chars = [...word];
  if (chars.length < 1 || chars.length > 30) {
    fail(`entry is ${chars.length} characters, must be 1-30`);
  }
  if (word.trim().length === 0) {
    fail("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    fail("entry must be a single word (no whitespace)");
  }
  // UTF-8 round-trip: the text must survive encode/decode unchanged.
  const roundTripped = Buffer.from(word, "utf8").toString("utf8");
  if (roundTripped !== word) {
    fail("entry is not valid UTF-8 text");
  }
}

function writeEntry(word: string): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, word, "utf8");

  // Read-back check: what landed on disk must be exactly the word.
  const written = readFileSync(outPath, "utf8");
  if (written !== word) {
    fail("read-back mismatch");
  }
  return outPath;
}

function main(): void {
  validateWord(WORD);
  const outPath = writeEntry(WORD);

  const chars = [...WORD];
  const bytes = Buffer.from(WORD, "utf8");
  console.log(`wrote ${outPath} (${chars.length} characters, ${bytes.length} bytes)`);
  console.log(WORD);
}

main();
