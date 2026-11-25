[![make.fun](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/jehan771/angry-judge-the-short-rant-contest/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/jehan771/angry-judge-the-short-rant-contest/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

# Angry Judge: The Short Rant Contest

A make.fun entry for [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) — one short, funny rant about an everyday annoyance, written to `/output/entry.txt` for a furious judge to score.

## The rant

> I put ONE bag of apples on the self-checkout scale and it screamed UNEXPECTED ITEM IN BAGGING AREA like I had smuggled in a live goose. A bored teenager strolled over, pressed one button, and the machine apologised to HIM. I did nothing. The apples did nothing. Yet somehow I am the criminal here.

297 characters — inside the 1–400 character gate.

## How it works

`main.ts` (Node 22+, no dependencies) holds one fixed rant, checks it against the gate (1–400 characters, not only whitespace) and writes it deterministically to `/output/entry.txt`. The rant targets the self-checkout scale: a concrete, universal annoyance with a fast punch and an escalation — the machine apologises to the attendant, not to you.

## How to run

```sh
node main.ts
cat /output/entry.txt
```
