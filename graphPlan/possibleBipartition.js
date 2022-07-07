/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const g = Array(n + 1)
    .fill(0)
    .map(() => new Set())

  for (const [u, v] of dislikes) {
    g[u].add(v)
    g[v].add(u)
  }

  const colors = Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    if (colors[i] === 0) {
      if (!dfs(g, colors, i, 0)) return false
    }
  }

  return true

  function dfs(g, colors, i, lastColor) {
    if (colors[i]) return colors[i] !== lastColor

    colors[i] = lastColor === 1 ? 2 : 1

    for (const next of g[i]) {
      if (!dfs(g, colors, next, colors[i])) return false
    }

    return true
  }
}
