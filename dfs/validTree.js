/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  const uf = Array(n)
    .fill(0)
    .map((val, index) => index)

  for (const [x, y] of edges) {
    const u = find(x)
    const v = find(y)
    // 有环
    if (u === v) return false
    union(u, v)
  }

  const val = find(0)
  for (let i = 1; i < n; i++) {
    // 是否归属同一个根节点
    if (val !== find(i)) return false
  }
  return true

  function find(x) {
    if (x !== uf[x]) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[v] = u
  }
}
