/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const res = []
  const m = board.length
  const n = board[0].length
  const seen = new Set()

  label: for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if (backtrack(j, k, 0, words[i])) {
          if (res.includes(words[i])) continue label
          res.push(words[i])
        }
      }
    }
  }

  return res

  function backtrack(r, c, len, word) {
    if (len === word.length) return true
    if (r >= 0 && r < m && c >= 0 && c < n && board[r][c] === word[len] && !seen.has(r + ',' + c)) {
      seen.add(r + ',' + c)
      const res =
        backtrack(r - 1, c, len + 1, word) ||
        backtrack(r + 1, c, len + 1, word) ||
        backtrack(r, c - 1, len + 1, word) ||
        backtrack(r, c + 1, len + 1, word)
      seen.delete(r + ',' + c)
      return res
    }
    return false
  }
}
