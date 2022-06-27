/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length
  const n = heights[0].length
  const reachPacific = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  const reachAtlantic = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    reach(heights, i, 0, reachPacific, heights[i][0])
    reach(heights, i, n - 1, reachAtlantic, heights[i][n - 1])
  }

  for (let i = 0; i < n; i++) {
    reach(heights, 0, i, reachPacific, heights[0][i])
    reach(heights, m - 1, i, reachAtlantic, heights[m - 1][i])
  }

  const ans = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (reachPacific[i][j] && reachAtlantic[i][j]) ans.push([i, j])
    }
  }

  return ans

  function reach(matrix, i, j, reachList, pre) {
    if (i < 0 || i >= m || j < 0 || j >= n || reachList[i][j] || matrix[i][j] < pre) return

    reachList[i][j] = 1
    reach(matrix, i - 1, j, reachList, matrix[i][j])
    reach(matrix, i + 1, j, reachList, matrix[i][j])
    reach(matrix, i, j - 1, reachList, matrix[i][j])
    reach(matrix, i, j + 1, reachList, matrix[i][j])
  }
}
