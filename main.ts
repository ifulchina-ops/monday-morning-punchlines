// Monday Morning Punchlines — one joke about Monday mornings.
// The program writes the joke to /output/entry.txt for the judge.
// Entry: 160 characters, under the 200-character cap.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Monday mornings are proof my bed has separation anxiety — every week it begs me to stay, and every week I betray it for a meeting that could have been an email.";

// Mirror the sealed gate: 1–200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${JOKE.length} characters; the gate needs 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
