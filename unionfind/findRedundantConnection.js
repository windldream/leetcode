/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const unionFind = Object.create(null)
  const n = edges.length

  for (let i = 1; i <= n; i++) {
    unionFind[i] = i
  }

  let ans = []

  for (const [u, v] of edges) {
    const x = find(u)
    const y = find(v)

    if (x === y) {
      ans = [u, v]
    } else {
      union(x, y)
    }
  }

  return ans

  function find(u) {
    const v = unionFind[u]
    return u === v ? u : (unionFind[u] = find(v))
  }

  function union(u, v) {
    unionFind[v] = u
  }
}
