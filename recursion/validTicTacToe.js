/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  let xCount = 0
  let oCount = 0
  for (const row of board) {
    for (const c of row) {
      if (c === 'X') xCount++
      if (c === 'O') oCount++
    }
  }

  if (oCount !== xCount && oCount !== xCount - 1) return false
  if (win(board, 'X') && oCount !== xCount - 1) return false
  if (win(board, 'O') && oCount !== xCount) return false
  return true

  function win(B, P) {
    for (let i = 0; i < B.length; i++) {
      if (P === B[0][i] && P === B[1][i] && P === B[2][i]) return true
      if (P === B[i][0] && P === B[i][1] && P === B[i][2]) return true
    }
    if (P === B[0][0] && P === B[1][1] && P === B[2][2]) return true
    if (P === B[0][2] && P === B[1][1] && P === B[2][0]) return true
    return false
  }
}
