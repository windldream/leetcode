/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  const m = A.length
  const n = A[0].length
  const ans = Array(n)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][i] = A[i][j]
    }
  }
  return ans
}

transpose([
  [1, 2, 3],
  [4, 5, 6]
])
