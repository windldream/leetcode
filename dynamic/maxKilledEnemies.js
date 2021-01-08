/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function(grid) {
  const n = grid.length
  if (n === 0) return 0
  const m = grid[0].length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '0') {
        ans = Math.max(ans, resoleEnemyNum(i, j, grid))
      }
    }
  }
  return ans

  function resoleEnemyNum(row, col, grid) {
    let num = 0
    let i = row - 1
    while (i >= 0) {
      if (grid[i][col] === 'W') break
      if (grid[i][col] === 'E') num++
      i--
    }

    i = row + 1
    while (i < grid.length) {
      if (grid[i][col] === 'W') break
      if (grid[i][col] === 'E') num++
      i++
    }

    i = col - 1
    while (i >= 0) {
      if (grid[row][i] === 'W') break
      if (grid[row][i] === 'E') num++
      i--
    }

    i = col + 1
    while (i < grid[row].length) {
      if (grid[row][i] === 'W') break
      if (grid[row][i] === 'E') num++
      i++
    }

    return num
  }
};