/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = function(n, roads) {
  const g = Array(n).fill(0).map(() => new Set())
  for (const [u, v] of roads) {
    g[u].add(v)
    g[v].add(u)
  }

  let maximal = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let networkRank = g[i].size + g[j].size
      if (g[i].has(j)) networkRank--
      if (networkRank > maximal) {
        maximal = networkRank
      }
    }
  }
  return maximal
};