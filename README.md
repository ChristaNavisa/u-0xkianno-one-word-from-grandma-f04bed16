# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/ChristaNavisa/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/ChristaNavisa/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the make.fun bounty [One Word From Grandma](https://make.fun/c/u-0xkianno-one-word-from-grandma-f04bed16): one word, at most 30 characters — the single word the entrant's grandma would text about AI.

## What it does

`main.ts` writes a single word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`):

> contraption

The word is the one a warm, slightly baffled grandma reaches for when a gadget she does not understand does something clever on its own — not "robot" or "AI", the obvious picks, but a contraption.

## Run

```sh
node main.ts
```

It writes `entry.txt` with no trailing newline, and checks the gate first: 1–30 characters, one word, valid UTF-8, read back from disk.
