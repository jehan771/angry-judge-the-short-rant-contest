// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Node 22+, no dependencies, fully deterministic: the rant is a fixed string,
// mirrored against the gate (1-400 characters, not only whitespace) before writing.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "I put ONE bag of apples on the self-checkout scale and it screamed " +
  "UNEXPECTED ITEM IN BAGGING AREA like I had smuggled in a live goose. " +
  "A bored teenager strolled over, pressed one button, and the machine " +
  "apologised to HIM. I did nothing. The apples did nothing. " +
  "Yet somehow I am the criminal here.";

const MIN_CHARS = 1;
const MAX_CHARS = 400;

const chars = [...RANT].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(`rant is ${chars} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}
if (RANT.trim().length === 0) {
  throw new Error("rant is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
