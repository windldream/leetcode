/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const m = board.length
  const n = board[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'R') {
        return getCapture(i, j, board)
      }
    }
  }
  return 0

  function getCapture(i, j, board) {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    let ans = 0
    for (const [dx, dy] of dirs) {
      let r = i + dx
      let c = j + dy
      while (r >= 0 && r < m && c >= 0 && c < n) {
        if (board[r][c] === 'B') break
        else if (board[r][c] === 'p') {
          ans++
          break
        }
        r += dx
        c += dy
      }
    }
    return ans
  }
}
