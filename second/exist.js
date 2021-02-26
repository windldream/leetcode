/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const visited = new Set()
      if (backtracking(board, i, j, visited, word, 0)) return true
    }
  }

  return false

  function backtracking(board, i, j, visited, word, index) {
    if (index === word.length) return true
    if (
      i >= 0 &&
      i < board.length &&
      j >= 0 &&
      j < board[0].length &&
      !visited.has(i + '&' + j) &&
      board[i][j] === word[index]
    ) {
      visited.add(i + '&' + j)
      const ans =
        backtracking(board, i + 1, j, visited, word, index + 1) ||
        backtracking(board, i - 1, j, visited, word, index + 1) ||
        backtracking(board, i, j + 1, visited, word, index + 1) ||
        backtracking(board, i, j - 1, visited, word, index + 1)
      visited.delete(i + '&' + j)
      return ans
    }
    return false
  }
}
