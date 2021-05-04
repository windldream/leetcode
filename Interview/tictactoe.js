/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function (board) {
  const ans = isWin(board, 'X')
  if (ans === 'X') return ans
  return isWin(board, 'O')

  function isWin(board, player) {
    const n = board.length
    let hasEmpty = false
    // 行相同
    outer: for (let i = 0; i < n; i++) {
      let isWin = true
      for (let j = 0; j < n; j++) {
        if (board[i][j] !== player) {
          isWin = false
        }
        if (board[i][j] === ' ') hasEmpty = true
      }
      if (isWin) return player
    }

    // 列相同
    outer: for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        if (board[i][j] !== player) continue outer
      }
      return player
    }

    let i = 0
    for (; i < n; i++) {
      if (board[i][i] !== player) break
    }
    if (i === n) return player

    i = n - 1
    for (; i >= 0; i--) {
      if (board[i][n - i - 1] !== player) break
    }
    if (i === -1) return player

    return hasEmpty ? 'Pending' : 'Draw'
  }
}
