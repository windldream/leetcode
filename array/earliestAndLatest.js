/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  const F = Array(30)
    .fill(0)
    .map(() =>
      Array(30)
        .fill(0)
        .map(() => Array(30).fill(0))
    )
  const G = Array(30)
    .fill(0)
    .map(() =>
      Array(30)
        .fill(0)
        .map(() => Array(30).fill(0))
    )

  if (firstPlayer > secondPlayer) {
    const temp = firstPlayer
    firstPlayer = secondPlayer
    secondPlayer = temp
  }

  return dp(n, firstPlayer, secondPlayer)

  function dp(n, f, s) {
    if (F[n][f][s]) return [F[n][f][s], G[n][f][s]]

    if (f + s === n + 1) return [1, 1]

    if (f + s > n + 1) {
      ;[F[n][f][s], G[n][f][s]] = dp(n, n + 1 - s, n + 1 - f)
      return [F[n][f][s], G[n][f][s]]
    }

    let earliest = Infinity
    let latest = -Infinity
    const half = (n + 1) >> 1

    if (s <= half) {
      for (let i = 0; i < f; i++) {
        for (let j = 0; j < s - f; j++) {
          const [x, y] = dp(half, i + 1, i + j + 2)
          earliest = Math.min(earliest, x)
          latest = Math.max(latest, y)
        }
      }
    } else {
      const prime = n + 1 - s
      const mid = (n - 2 * prime + 1) >> 1
      for (let i = 0; i < f; i++) {
        for (let j = 0; j < prime - f; j++) {
          const [x, y] = dp(half, i + 1, i + j + mid + 2)
          earliest = Math.min(earliest, x)
          latest = Math.max(latest, y)
        }
      }
    }

    return [(F[n][f][s] = earliest + 1), (G[n][f][s] = latest + 1)]
  }
}
