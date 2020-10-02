/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const visited = new Set()
      if (dfs(i, j, board, visited, '')) return true
    }
  }
  return false

  function dfs(i, j, board, visited, track) {
    if (i < 0 || i >= m || j < 0 || j >= n || visited.has(i + '&' + j)) return false
    track += board[i][j]
    if (track === word) return true
    if (!word.startsWith(track)) return false
    visited.add(i + '&' + j)
    for (const [x, y] of dirs) {
      const dx = i + x
      const dy = j + y
      if (dfs(dx, dy, board, visited, track)) return true
    }
    visited.delete(i + '&' + j)
    return false
  }
}

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ],
  'ABCCED'
)
