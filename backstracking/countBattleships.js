/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  const n = board.length
  if (n === 0) return 0
  const m = board[0].length
  if (m === 0) return 0

  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === '.') continue
      if (i > 0 && board[i - 1][j] === 'X') continue
      if (j > 0 && board[i][j - 1] === 'X') continue
      count++
    }
  }
  return count
}
