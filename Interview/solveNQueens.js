/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = []
  const board = Array(n)
    .fill(0)
    .map(() => Array(n).fill('.'))
  const rows = Array(n).fill(false)
  const cols = Array(n).fill(false)
  backtracking(0, board)
  return ans

  function backtracking(r, board) {
    if (r === n) {
      ans.push(board.map((item) => item.join('')))
      return
    }
    for (let c = 0; c < n; c++) {
      if (!isValid(board, r, c)) continue
      board[r][c] = 'Q'
      rows[r] = true
      cols[c] = true
      backtracking(r + 1, board)
      board[r][c] = '.'
      rows[r] = false
      cols[c] = false
    }
  }

  function isValid(board, i, j) {
    if (rows[i] || cols[j]) return false

    const n = board.length
    let r = i - 1
    let c = j - 1
    while (r >= 0 && c >= 0) {
      if (board[r][c] === 'Q') return false
      r--
      c--
    }

    r = i + 1
    c = j + 1
    while (r < n && c < n) {
      if (board[r][c] === 'Q') return false
      r++
      c++
    }

    r = i + 1
    c = j - 1
    while (r < n && c >= 0) {
      if (board[r][c] === 'Q') return false
      r++
      c--
    }

    r = i - 1
    c = j + 1
    while (r >= 0 && c < n) {
      if (board[r][c] === 'Q') return false
      r--
      c++
    }
    return true
  }
}

solveNQueens(4)
