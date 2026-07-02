---
title: Small Systems, Clear Interfaces
description: Why the narrowest seam is often the fastest seam.
pubDate: 2026-07-01
featured: true
---

Most performance work is really interface work.

When a system feels slow, the first instinct is often to optimize the hottest function. Sometimes that is right. More often, the better question is: what forced this function to do so much work in the first place?

A clean interface does three useful things at once:

1. It states exactly what data is needed.
2. It prevents accidental work from leaking across boundaries.
3. It gives you a place to measure behavior without guessing.

That last point matters more than people admit. Once a boundary is explicit, you can count calls, size payloads, and write down latency expectations.[^measure] Before that, the work is usually hidden inside convenience.

Consider a tiny service split:

```ts
type Profile = {
  id: string;
  displayName: string;
  reputation: number;
};

type ProfileStore = {
  getPublicProfile(id: string): Promise<Profile | null>;
};
```

This looks ordinary, but it quietly rules out a large class of waste. A caller cannot ask for the entire row "just in case." The store does not need to materialize private fields. Caching becomes less fragile because the returned shape is stable.

The boring versions of these choices accumulate into real wins:

- fewer bytes moved across process boundaries
- fewer cache keys
- less rendering churn
- fewer surprises during refactors

The strongest technical writing has the same property. It exposes the minimum surface area needed for the reader to continue. The best code often reads like that too: short commitments, explicit assumptions, and very little theater.

> If an API is hard to measure, it is usually hard to own.

There is a temptation to call this "premature abstraction." I think the opposite is closer to true. Bad abstraction is premature. Clear naming and narrow contracts are what let a codebase stay small for longer.[^small]

[^measure]: Measurement gets easier when the unit of work is stable. "One request" is a poor unit if it can secretly trigger five unrelated lookups.

[^small]: Small here means cognitively small, not just a low line count. A short file with unclear obligations can still be enormous to maintain.
