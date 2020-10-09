/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const len = arr.length
  const dp = Array(len + 1).fill(0)
  dp[0] = 0
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i] = Math.max(dp[i], i >= j ? dp[i - j] + Math.max(...arr.slice(i - j, i)) * j : arr[i - 1])
    }
  }
  return dp[len]
}

maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)
