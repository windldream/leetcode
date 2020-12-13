/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const uf = Array(n)
    .fill(0)
    .map((val, index) => index)

  for (const [x, y] of edges) {
    const u = find(x)
    const v = find(y)
    if (u !== v) {
      union(v, u)
    }
  }

  const ans = new Set()
  for (let i = 0; i < n; i++) {
    ans.add(find(i))
  }

  return ans.size

  function find(x) {
    if (x !== uf[x]) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[u] = v
  }
}
