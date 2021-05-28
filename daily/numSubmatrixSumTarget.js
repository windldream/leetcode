/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  const presum = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    presum[i][0] = matrix[i][0]
    for (let j = 1; j < n; j++) {
      presum[i][j] = presum[i][j - 1] + matrix[i][j]
    }
  }

  const map = new Map()
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      map.clear()
      let sum = 0
      for (let k = 0; k < m; k++) {
        sum += presum[k][j] - presum[k][i] + matrix[k][i]
        if (sum === target) ans++
        if (map.has(sum - target)) {
          ans += map.get(sum - target)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
      }
    }
  }
  return ans
}
