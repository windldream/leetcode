/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const uf = {}
  const n = equations.length
  const g = new Map()
  for (let i = 0; i < n; i++) {
    const [a, b] = equations[i]
    if (!uf[a]) uf[a] = a
    if (!uf[b]) uf[b] = b
    const u = find(a)
    const v = find(b)
    union(u, v)
    if (!g.has(a)) g.set(a, new Map())
    g.get(a).set(b, values[i])
    if (!g.has(b)) g.set(b, new Map())
    g.get(b).set(a, 1 / values[i])
  }

  const ans = []
  for (const [a, b] of queries) {
    const u = find(a)
    const v = find(b)
    if (u !== v || !g.has(a) || !g.has(b)) {
      ans.push(-1)
    } else {
      const visited = new Set()
      ans.push(dfs(a, b, visited))
    }
  }
  return ans

  function dfs(a, b, visited) {
    visited.add(a)
    for (const [next, val] of g.get(a)) {
      if (next === b) return val
      if (visited.has(next)) continue
      const ans = dfs(next, b, visited)
      if (ans !== -1) {
        return val * ans
      }
    }
    return -1
  }

  function union(u, v) {
    uf[u] = v
  }

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }
}

calcEquation(
  [
    ['x1', 'x2'],
    ['x2', 'x3'],
    ['x1', 'x4'],
    ['x2', 'x5']
  ],
  [3.0, 0.5, 3.4, 5.6],
  [
    ['x2', 'x4'],
    ['x1', 'x5'],
    ['x1', 'x3'],
    ['x5', 'x5'],
    ['x5', 'x1'],
    ['x3', 'x4'],
    ['x4', 'x3'],
    ['x6', 'x6'],
    ['x0', 'x0']
  ]
)

// x1 -> x2 -> x3
// x1 -> x4
// x2 -> x5
