/**
 * @param {string[]} grid
 * @param {number} catJump
 * @param {number} mouseJump
 * @return {boolean}
 */
var canMouseWin = function (grid, catJump, mouseJump) {
  const rows = grid.length
  const cols = grid[0].length
  const maxRound = rows * cols + 2
  const dp = Array(2)
    .fill(0)
    .map(() =>
      Array(rows * cols * rows * cols)
        .fill(0)
        .map(() => Array(maxRound + 1).fill(-1))
    )

  let cat
  let mouse
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'M') {
        mouse = [i, j]
      } else if (grid[i][j] === 'C') {
        cat = [i, j]
      }
    }
  }

  return !!search(cat, mouse, 0, 1)

  function search(cat, mouse, round, isMouse) {
    if (round === maxRound + 1) return 0
    if (isMouse === 1 && grid[mouse[0]][mouse[1]] === 'F') return 1
    if (isMouse === 0 && grid[cat[0]][cat[1]] === 'F') return 1
    if (isMouse === 1 && cat[0] === mouse[0] && cat[1] === mouse[1]) return 0
    if (isMouse === 0 && cat[0] === mouse[0] && cat[1] === mouse[1]) return 1

    const index = encode(cat, mouse)
    if (dp[isMouse][index][round] >= 0) return dp[isMouse][index][round]

    let ans = 0
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    if (isMouse === 1) {
      if (search(cat, mouse, round, 0) === 0) {
        ans = 1
      } else {
        for (const [dx, dy] of dirs) {
          for (let jump = 1; jump <= mouseJump; jump++) {
            const row = mouse[0] + jump * dx
            const col = mouse[1] + jump * dy

            if (row < 0 || row >= rows || col < 0 || col >= cols) break
            if (grid[row][col] === '#') break
            if (search(cat, [row, col], round, 0) === 0) {
              ans = 1
              break
            }
          }
          if (ans === 1) break
        }
      }
    } else {
      const nextRound = round + 1
      if (search(cat, mouse, nextRound, 1) === 0) {
        ans = 1
      } else {
        for (const [dx, dy] of dirs) {
          for (let jump = 1; jump <= catJump; jump++) {
            const row = cat[0] + jump * dx
            const col = cat[1] + jump * dy

            if (row < 0 || row >= rows || col < 0 || col >= cols) break
            if (grid[row][col] === '#') break
            if (search([row, col], mouse, nextRound, 1) === 0) {
              ans = 1
              break
            }
          }
          if (ans === 1) break
        }
      }
    }

    dp[isMouse][index][round] = ans
    return ans
  }

  function encode(cat, mouse) {
    let c = cat[0] * cols + cat[1]
    let m = mouse[0] * cols + mouse[1]
    return c * rows * cols + m
  }
}
