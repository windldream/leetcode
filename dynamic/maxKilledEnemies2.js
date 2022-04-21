/**
 * @param {character[][]} grid
 * @return {number}
 */
var maxKilledEnemies = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const boom = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  let ans = 0

  for (let i = 0; i < m; i++) {
    let pre = 0

    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 'W') pre = 0
      else if (grid[i][j] === 'E') pre += 1
      boom[i][j] += pre
    }

    pre = 0

    for (let j = n - 1; j >= 0; j--) {
      if (grid[i][j] === 'W') pre = 0
      else if (grid[i][j] === 'E') pre += 1
      boom[i][j] += pre
    }
  }

  for (let j = 0; j < n; j++) {
    let pre = 0

    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 'W') pre = 0
      else if (grid[i][j] === 'E') pre += 1
      boom[i][j] += pre
    }

    pre = 0

    for (let i = m - 1; i >= 0; i--) {
      if (grid[i][j] === 'W') pre = 0
      else if (grid[i][j] === 'E') pre += 1
      boom[i][j] += pre
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '0') ans = Math.max(ans, boom[i][j])
    }
  }

  return ans
}
