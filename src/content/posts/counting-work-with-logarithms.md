---
title: Counting Work With Logarithms
description: A compact mental model for divide-and-conquer costs.
pubDate: 2026-06-27
---

When engineers say an algorithm is "only logarithmic," they usually mean one of two different stories:

- the problem size shrinks by a constant factor each step
- the number of useful bits of uncertainty shrinks by a constant amount each step

Both stories lead to the same shape. If each round halves the remaining search space, the number of rounds is the smallest $k$ such that

$$
\frac{n}{2^k} \le 1.
$$

Rearranging gives

$$
2^k \ge n
\qquad\Longrightarrow\qquad
k \ge \log_2 n.
$$

That is the full intuition behind binary search. Each comparison removes half of the remaining candidates, so the cost grows with the number of times you can divide by two before nothing remains.

The same pattern appears in simple recurrences. For

$$
T(n) = T\left(\frac{n}{2}\right) + n,
$$

the total work is

$$
T(n) = n + \frac{n}{2} + \frac{n}{4} + \cdots \lt 2n,
$$

which is why the recurrence resolves to $O(n)$ even though it contains a recursive term. The recursion is deep only for $\log_2 n$ levels, and each subsequent level does less work than the one before.

Inline math is often enough for day-to-day writing. For example, if a structure doubles whenever it fills, the expensive resize happens only after capacity crosses $2^m$ for some integer $m$. But it is useful to keep the block form nearby because it reminds you what the machine is actually counting.

One practical implication follows from this quickly: when an optimization reduces a constant factor inside a logarithm, the user usually cannot feel it. When it removes a linear pass, they often can.
