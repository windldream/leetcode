/**
 * @param {number[][]} M
 * @return {number}
 */
const longestLine = function(M) {
  const n = M.length
  if (n === 0) return 0
  const m = M[0].length

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (M[i][j] === 1) {
        ans = Math.max(find(M, i, j, 0), ans)
        ans = Math.max(find(M, i, j, 1), ans)
        ans = Math.max(find(M, i, j, 2), ans)
        ans = Math.max(find(M, i, j, 3), ans)
      }
    }
  }
  return ans

  function find (m, i, j, dir) {
    if (i >= m.length || j >= m[i].length || i < 0 || j < 0) return 0
    if (m[i][j] === 0) return 0

    switch (dir) {
      case 0:
        return 1 + find(m, i + 1, j, 0)
      case 1:
        return 1 + find(m, i, j + 1, 1)
      case 2:
        return 1 + find(m, i + 1, j + 1, 2)
      case 3:
        return 1 + find(m, i + 1, j - 1, 3)
    }
  }
};