/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function (board) {
  const m = board.length
  if (check(board, 'O')) return 'O'
  if (check(board, 'X')) return 'X'
  let len = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'X' || board[i][j] === 'O') len++
    }
  }
  return len === m * m ? 'Draw' : 'Pending'

  function check(arr, t) {
    const m = arr.length
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] !== t) break
        if (j === m - 1) return true
      }
    }

    let i = 0
    for (; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[j][i] !== t) break
        if (j === m - 1) return true
      }
    }

    i = 0
    for (; i < m; i++) {
      if (arr[i][i] !== t) break
    }
    if (i === m) return true

    i = 0
    for (; i < m; i++) {
      if (arr[i][m - i - 1] !== t) break
    }

    if (i === m) return true
    return false
  }
}

tictactoe(['O X', ' XO', 'X O'])
