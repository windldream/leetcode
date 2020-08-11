/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const seen = new Set()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrack(i, j, 0)) {
        return true
      }
    }
  }
  return false

  function backtrack(i, j, k) {
    if (k === word.length) return true
    if (i >= 0 && i < m && j >= 0 && j < n && board[i][j] === word[k] && !seen.has(i + ',' + j)) {
      seen.add(i + ',' + j)
      const res =
        backtrack(i - 1, j, k + 1) ||
        backtrack(i + 1, j, k + 1) ||
        backtrack(i, j - 1, k + 1) ||
        backtrack(i, j + 1, k + 1)
      seen.delete(i + ',' + j)
      return res
    }
    return false
  }
}
