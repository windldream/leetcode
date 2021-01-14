/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function(m, n, k) {
  const visited = new Set()
  dfs(0, 0, visited)
  return visited.size

  function dfs(row, col, visited) {
    if (row < 0 || row >= m || col < 0 || col >= n) return
    const sum = getSum(row, col)
    if (sum > k) return
    if (visited.has(row + '&' + col)) return
    visited.add(row + '&' + col)
    dfs(row + 1, col, visited)
    dfs(row - 1, col, visited)
    dfs(row, col + 1, visited)
    dfs(row, col - 1, visited)
  }

  function getSum(row, col) {
    let total = 0
    for (const num of (row + '')) {
      total += +num
    }
    for (const num of (col + '')) {
      total += +num
    }
    return total
  }
};