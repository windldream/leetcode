/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const m = mat.length
  const n = mat[0].length
  const left = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    let now = 0
    for (let j = 0; j < n; j++) {
      if (mat[i][j]) {
        now++
      } else {
        now = 0
      }
      left[i][j] = now
    }
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let min = Infinity
      for (let k = i; k >= 0; k--) {
        min = Math.min(left[k][j], min)
        ans += min
      }
    }
  }
  return ans
}

numSubmat([
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0]
])
