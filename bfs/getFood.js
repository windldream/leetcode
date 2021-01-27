/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ]
  const m = grid.length
  const n = grid[0].length
  const stack = []
  const visited = new Set()
  outer: for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '*') {
        stack.push([i, j])
        visited.add(i + '&' + j)
        break outer
      }
    }
  }

  let ans = 0
  while (stack.length) {
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const [r, c] = stack.shift()
      if (grid[r][c] === '#') return ans
      for (const [dx, dy] of dirs) {
        const x = r + dx
        const y = c + dy
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 'X' || visited.has(x + '&' + y)) continue
        stack.push([x, y])
        visited.add(x + '&' + y)
      }
    }
    ans++
  }
  return -1
}
