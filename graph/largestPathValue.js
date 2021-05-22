/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  const n = colors.length
  const g = Array(n)
    .fill(0)
    .map(() => new Set())
  const degree = Array(n).fill(0)
  for (const [u, v] of edges) {
    degree[v]++
    g[u].add(v)
  }

  const queue = []
  for (let i = 0; i < n; i++) {
    if (degree[i] === 0) queue.push(i)
  }

  let found = 0
  const dp = Array(n)
    .fill(0)
    .map(() => Array(26).fill(0))
  while (queue.length) {
    found++
    const u = queue.shift()
    dp[u][toIndex(colors[u])]++
    for (const v of g[u]) {
      degree[v]--
      for (let i = 0; i < 26; i++) {
        dp[v][i] = Math.max(dp[v][i], dp[u][i])
      }
      if (degree[v] === 0) queue.push(v)
    }
  }

  if (found !== n) return -1

  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, Math.max(...dp[i]))
  }
  return ans

  function toIndex(c) {
    return c.charCodeAt() - 'a'.charCodeAt()
  }
}
