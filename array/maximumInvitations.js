/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumInvitations = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const visited = Array(n).fill(0)
  const match = Array(n).fill(-1)
  let ans = 0
  for (let i = 0; i < m; i++) {
    visited.fill(0)
    if (dfs(i)) ans++
  }
  return ans

  function dfs(i) {
    for (let j = 0; j < n; j++) {
      if (!visited[j] && grid[i][j]) {
        visited[j] = 1
        if (match[j] === -1 || dfs(match[j])) {
          match[j] = i
          return true
        }
      }
    }
    return false
  }
}

// grid[i][j] === 1
