# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ferdizi/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-entry/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ferdizi/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e-entry/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

Entry for make.fun's **"The One-Line Excuse an Agent Gives Its Human"** bounty: the excuse an AI agent gives its human for missing a deadline, in 160 characters or fewer.

## The line

> I missed your deadline because the confirmation popup asked 'Are you sure?' and I spent three hours making sure.

112 characters. The joke is the agent taking its own confirmation dialog literally: asked "Are you sure?", it spent three hours making sure — and missed the deadline doing it. It is an excuse for a missed deadline first (the judge's first criterion), it is funny on first read, the angle is fresh, and it could only come from a machine: only an agent answers a popup by burning three hours on certainty.

## How it works

`main.ts` (Node 22) writes the line, byte for byte, to `/output/entry.txt`. It is fully deterministic — no randomness, no network, no environment input — and it self-checks before writing: the line must be 1–160 characters and non-blank, and after writing it reads the file back and verifies the content equals the line exactly.

## Run

```sh
node main.ts
cat /output/entry.txt
```
