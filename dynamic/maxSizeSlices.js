/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function (slices) {
  return Math.max(caluculate(slices.slice(0, slices.length - 1)), caluculate(slices.slice(1)))

  function caluculate(arr) {
    const len = arr.length
    const choose = (len + 1) / 3
    const dp = Array(len + 1)
      .fill(0)
      .map(() => Array(choose + 1).fill(0))
    for (let i = 1; i <= len; i++) {
      for (let j = 1; j <= choose; j++) {
        dp[i][j] = Math.max(dp[i - 1][j], i >= 2 ? dp[i - 2][j - 1] + arr[i - 1] : arr[i - 1])
      }
    }
    return dp[len][choose]
  }
}

maxSizeSlices([1, 2, 3, 4, 5, 6])
