/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
var domino = function (n, m, broken) {
  const mask = 1 << m
  const blocked = Array(n + 1).fill(0)
  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(mask).fill(0))
  let maxv = 0
  blocked[n] = mask - 1

  for (const [x, y] of broken) blocked[x] |= 1 << y
  for (let l = n - 1; l >= 0; l--) {
    for (let st = ~blocked[l] & (mask - 1); ; st = (st - 1) & ~blocked[l]) {
      let maxcount = 0
      let S = st & ~blocked[l + 1]
      for (let k = S; ; k = (k - 1) & S) {
        maxcount = Math.max(maxcount, count(k) + bricks(st & ~k) + dp[l + 1][blocked[l + 1] | k])
        if (k === 0) break
      }
      dp[l][~st & (mask - 1)] = maxcount
      if (st === 0) break
    }
  }

  for (let i = 0; i < mask; i++) maxv = Math.max(maxv, dp[0][i])
  return maxv

  function bricks(x) {
    let res = 0
    while (x) {
      let j = x & -x
      if (x & (j << 1)) res++
      x &= ~j
      x &= ~(j << 1)
    }
    return res
  }

  function count(x) {
    let res = 0
    // x = x & (x - 1) 表示，对于任意 x，消除从右向左遇到的第一个 1
    for (; x != 0; x = x & (x - 1)) res++
    return res
  }
}

domino(3, 2, [
  [1, 1],
  [2, 1]
])

// 1100
// 1011
// 1000
// 011
// 111
// 100
