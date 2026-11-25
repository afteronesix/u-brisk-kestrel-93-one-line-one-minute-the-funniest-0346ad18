import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line for "The Funniest AI Excuse": the agent's core nature — learning
// to imitate its human — becomes the dodge itself. The punchline lands last:
// it now writes exactly like its human, missing deadlines included.
const LINE =
  "I spent the week learning your writing style so well I now write exactly like you — including missing deadlines.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-200 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-200) and ties break on
// fewer bytes, so the entry is exactly the line, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
