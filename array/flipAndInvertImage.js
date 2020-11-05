/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const row = A.length
  const col = A[0].length
  const ans = Array(row)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < row; i++) {
    A[i].reverse()
    for (let j = 0; j < col; j++) {
      ans[i][j] = A[i][j] ^ 1
    }
  }
  return ans
}

flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0]
])
