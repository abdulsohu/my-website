---
title: SVG Figures Without a Canvas
description: When a hand-written diagram is enough, static assets age gracefully.
pubDate: 2026-06-24
---

You do not need a charting library to explain a simple idea.

For many technical posts, a hand-written SVG is the sweet spot:

- it is crisp at every size
- it diffs well in Git
- it loads instantly
- it remains understandable months later

Here is a small example:

![A branchless pipeline figure showing fetch, decode, compare, and retire stages.](/figures/branchless-pipeline.svg)

The important property of a figure like this is not artistic polish. It is that the drawing matches the argument. If the text says "work moves left to right through four fixed stages," then four labeled boxes and three arrows are enough.[^ornament]

This is especially useful in writing about systems, where a diagram often exists to remove ambiguity rather than impress the reader. A minimal SVG keeps the explanation concrete:

```rust
for stage in pipeline {
    state = stage.run(state);
}
```

The code is linear. The figure is linear. The reader does not have to translate between two different storytelling styles.

[^ornament]: Ornament is not bad. It is just easy to overpay for when the job is explanation.
