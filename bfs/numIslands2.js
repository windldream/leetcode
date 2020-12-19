/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
const numIslands2 = function(m, n, positions) {
  const uf = {}
  const grid = Array(m * n).fill(0)
  const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]]
  const ans = []
  let count = 0
  for (const [i, j] of positions) {
    if (grid[i * n + j] === 1) {
      ans.push(count)
      continue
    }
    uf[i * n + j] = i * n + j
    grid[i * n + j] = 1
    count++
    for (const [dx, dy] of dirs) {
      const x = i + dx
      const y = j + dy
      const index = x * n + y
      if (x >= 0 && x < m && y >= 0 && y < n && grid[index] === 1) {
        const u = find(i * n + j)
        const v = find(index)
        if (u !== v) {
          union(u, v)
          count--
        }
      }
    }
    ans.push(count)
  }
  return ans

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(x, y) {
    uf[x] = y
  }
};