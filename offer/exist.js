/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        if (backtracking(i, j, 0)) return true
      }
    }
  }
  return false

  function backtracking(i, j, index) {
    if (index === word.length) return true
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[index]) return false
    visited[i][j] = true
    if (
      backtracking(i + 1, j, index + 1) ||
      backtracking(i - 1, j, index + 1) ||
      backtracking(i, j - 1, index + 1) ||
      backtracking(i, j + 1, index + 1)
    ) {
      return true
    }
    visited[i][j] = false
    return false
  }
}
