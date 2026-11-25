// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Fully deterministic: fixed text, no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The self-checkout accused me of stealing my own groceries. " +
  "'Unexpected item in the bagging area.' The item was the bag. " +
  "I actually apologised to a machine, re-scanned my milk like a shoplifter, and it still flagged me. " +
  "I just paid forty bucks to be frisked by a robot that can't count to four.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
console.log(`Wrote ${RANT.length} characters to /output/entry.txt`);
