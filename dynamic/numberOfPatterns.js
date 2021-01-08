/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const numberOfPatterns = function(m, n) {
  const skip = Array(10).fill(0).map(() => Array(10).fill(0))
  skip[1][3] = skip[3][1] = 2
  skip[1][7] = skip[7][1] = 4
  skip[3][9] = skip[9][3] = 6
  skip[4][6] = skip[6][4] = skip[2][8] = skip[8][2] = 5
  skip[1][9] = skip[9][1] = skip[3][7] = skip[7][3] = 5
  skip[7][9] = skip[9][7] = 8

  let result = 0
  const visited = Array(10).fill(false)
  for (let i = m; i <= n; i++) {
    result += dfs(1, visited, skip, i - 1) * 4
    result += dfs(2, visited, skip, i - 1) * 4
    result += dfs(5, visited, skip, i - 1)
  }
  return result

  function dfs(cur, visited, skip, remainKeyCount) {
    if (remainKeyCount === 0) return 1
    let result = 0
    visited[cur] = true
    for (let i = 1; i <= 9; i++) {
      const crossNum = skip[cur][i]
      if (!visited[i] && (crossNum === 0 || visited[crossNum])) {
        result += dfs(i, visited, skip, remainKeyCount - 1)
      }
    }
    visited[cur] = false
    return result
  }
};