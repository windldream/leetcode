/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const g = new Map()
  for (const [u, v] of connections) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    g.get(u).add([v, true])
    if (!g.has(v)) {
      g.set(v, new Set())
    }
    g.get(v).add([u, false])
  }

  let ans = 0
  dfs(g, 0, -1)
  return ans

  function dfs(g, root, parent) {
    if (!g.has(root)) return
    for (const next of g.get(root)) {
      if (next[0] !== parent) {
        if (next[1] === true) {
          ans += 1
        }
        dfs(g, next[0], root)
      }
    }
  }
}

minReorder(5, [
  [1, 0],
  [1, 2],
  [3, 2],
  [3, 4]
])
