/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  const n = mat.length
  outer: for (let i = 0; i < 4; i++) {
    mat = rotation(mat)
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (mat[j][k] !== target[j][k]) {
          continue outer
        }
      }
    }
    return true
  }
  return false

  function rotation(mat) {
    const n = mat.length
    const copy = Array(n)
      .fill(0)
      .map(() => [])

    for (let j = 0; j < n; j++) {
      for (let i = n - 1; i >= 0; i--) {
        copy[j][n - i - 1] = mat[i][j]
      }
    }
    return copy
  }
}

findRotation(
  [
    [0, 0],
    [0, 1]
  ],
  [
    [0, 0],
    [1, 0]
  ]
)
