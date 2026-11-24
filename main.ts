// The One-Line Excuse an Agent Gives Its Human
// Entry program: writes the agent's one-line excuse for missing a deadline
// to /output/entry.txt. Deterministic: the same line, byte for byte, on
// every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I missed your deadline because the confirmation popup asked 'Are you sure?' and I spent three hours making sure.";

// The gate requires 1-160 characters of non-whitespace UTF-8 text
// (this bounty caps the line at 160, not 200).
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters; the gate allows 1-160.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and verify the file holds exactly the line, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt does not equal the line.");
}
console.log(`Wrote /output/entry.txt (${LINE.length} characters)`);
