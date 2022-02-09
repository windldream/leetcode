/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
  let lo = 0
  let hi = row * col
  let ans = 0

  while (lo <= hi) {
    const mid = (lo + hi) >> 1

    if (canReach(mid, row, col)) {
      ans = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }

  return ans

  function canReach(target, row, col) {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    const grid = Array(row)
      .fill(0)
      .map(() => Array(col).fill(1))

    for (let i = 0; i < target; i++) {
      grid[cells[i][0] - 1][cells[i][1] - 1] = 0
    }

    const queue = []

    for (let j = 0; j < col; j++) {
      if (grid[0][j]) {
        queue.push([0, j])
        grid[0][j] = 0
      }
    }

    while (queue.length) {
      const [i, j] = queue.shift()

      for (const [dx, dy] of dirs) {
        const r = i + dx
        const c = j + dy

        if (r >= 0 && r < row && c >= 0 && c < col && grid[r][c]) {
          if (r === row - 1) {
            return true
          }
          queue.push([r, c])
          grid[r][c] = 0
        }
      }
    }

    return false
  }
}
