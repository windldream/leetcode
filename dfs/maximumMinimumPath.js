/**
 * @param {number[][]} A
 * @return {number}
 */
const maximumMinimumPath = function (A) {
  const n = A.length
  const m = A[0].length
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const uf = Array(n * m)
    .fill(0)
    .map((val, index) => index)
  const sz = Array(n * m).fill(1)
  const arr = []
  const visited = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr.push([A[i][j], i, j])
    }
  }
  arr.sort((a, b) => a[0] - b[0])
  let ans = Math.min(A[0][0], A[n - 1][m - 1])
  visited.add(0 + '&' + 0)
  visited.add(n - 1 + '&' + (m - 1))
  while (find(0) !== find(n * m - 1)) {
    const [p, x, y] = arr.pop()
    ans = Math.min(ans, p)
    for (const [dx, dy] of dirs) {
      const i = x + dx
      const j = y + dy
      if (visited.has(i + '&' + j)) {
        union(x * m + y, i * m + j)
      }
      visited.add(x + '&' + y)
    }
  }
  return ans

  function find(x) {
    if (x !== uf[x]) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(x, y) {
    let u = find(x)
    let v = find(y)
    if (u === v) return
    if (sz[u] < sz[v]) {
      ;[u, v] = [v, u]
    }
    uf[v] = u
    sz[u] += sz[v]
  }
}

maximumMinimumPath([
  [5, 4, 5],
  [1, 2, 6],
  [7, 4, 6]
])
