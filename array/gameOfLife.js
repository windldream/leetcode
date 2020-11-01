/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length
  if (m === 0) return
  const n = board[0].length
  if (n === 0) return

  const copyBoard = Array(m)
    .fill(0)
    .map((val, index) => board[index].slice())

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      const num = getLife(copyBoard, r, c)
      if (board[r][c] === 1) {
        if (num < 2 || num > 3) {
          board[r][c] = 0
        }
      } else {
        if (num === 3) {
          board[r][c] = 1
        }
      }
    }
  }

  function getLife(board, r, c) {
    const dirs = [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]
    let ans = 0
    for (const [x, y] of dirs) {
      const dx = r + x
      const dy = c + y
      if (dx >= 0 && dx < m && dy >= 0 && dy < n) {
        ans += board[dx][dy] === 1
      }
    }
    return ans
  }
}

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
])
