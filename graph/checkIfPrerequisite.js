/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (n, prerequisites, queries) {
  const g = new Map()
  for (const [u, v] of prerequisites) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    g.get(u).add(v)
  }

  const ans = []
  for (let i = 0; i < queries.length; i++) {
    const [u, v] = queries[i]
    const visited = new Set()
    ans[i] = isReachable(g, u, v, visited)
  }
  return ans

  function isReachable(g, u, v, visited) {
    if (visited.has(u)) return false
    if (u === v) return true
    if (!g.has(u)) return false
    visited.add(u)
    for (const next of g.get(u)) {
      const ans = isReachable(g, next, v, visited)
      if (ans) return true
    }
    return false
  }
}

checkIfPrerequisite(
  2,
  [[1, 0]],
  [
    [0, 1],
    [1, 0]
  ]
)
