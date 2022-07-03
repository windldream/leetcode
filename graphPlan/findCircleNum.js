/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const uf = Array(n)
    .fill(0)
    .map((val, idx) => idx)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const u = find(i)
      const v = find(j)
      if (isConnected[i][j]) {
        union(u, v)
      } else {
        if (u === v) {
          union(u, j)
        }
      }
    }
  }

  const set = new Set(uf)

  return set.size

  function union(x, y) {
    uf[y] = x
  }

  function find(x) {
    if (uf[x] === x) return x
    return (uf[x] = find(uf[x]))
  }
}
