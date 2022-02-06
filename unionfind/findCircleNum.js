/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length
  const unionFind = Array(n).fill(-1)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) {
        const u = find(i)
        const v = find(j)
        if (u !== v) union(u, v)
      }
    }
  }

  let count = 0

  for (let i = 0; i < n; i++) {
    count += unionFind[i] === -1 ? 1 : 0
  }

  return count

  function find(x) {
    const y = unionFind[x]
    if (y === -1) return x
    return (unionFind[x] = find(y))
  }

  function union(x, y) {
    unionFind[y] = x
  }
}
