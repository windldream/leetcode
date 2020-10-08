/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function (n, s1, s2, evil) {
  const mod = 10 ** 9 + 7
  const f = Array(500)
    .fill(0)
    .map(() =>
      Array(50)
        .fill(0)
        .map(() => Array(4).fill(-1))
    )
  const trans = Array(50)
    .fill(0)
    .map(() => Array(26).fill(-1))
  const m = evil.length
  const fail = Array(m).fill(0)

  for (let i = 1; i < m; i++) {
    let j = fail[i - 1]
    while (j && evil[j] !== evil[i]) {
      j = fail[j - 1]
    }
    if (evil[j] === evil[i]) {
      fail[i] = j + 1
    }
  }

  return dfs(0, 0, 3)

  function dfs(pos, stats, bound) {
    if (stats === m) return 0

    if (pos === s1.length) return 1

    if (f[pos][stats][bound] !== -1) return f[pos][stats][bound]

    f[pos][stats][bound] = 0
    // 1, 3
    const l = (bound & 1 ? s1[pos] : 'a').charCodeAt()
    // 2, 3
    const r = (bound & 2 ? s2[pos] : 'z').charCodeAt()
    for (let c = l; c <= r; c++) {
      const nextStats = getTrans(stats, c)
      const nextBound =
        (bound & 1 ? String.fromCharCode(c) === s1[pos] : 0) ^
        (bound & 2 ? (String.fromCharCode(c) === s2[pos]) << 1 : 0)
      f[pos][stats][bound] += dfs(pos + 1, nextStats, nextBound)
      f[pos][stats][bound] %= mod
    }
    return f[pos][stats][bound]
  }

  function getTrans(stats, c) {
    if (trans[stats][c - 97] !== -1) return trans[stats][c - 97]
    while (stats && evil[stats] !== String.fromCharCode(c)) {
      stats = fail[stats - 1]
    }
    return (trans[stats][c - 97] = evil[stats] === String.fromCharCode(c) ? stats + 1 : 0)
  }
}
