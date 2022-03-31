/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const n = arr.length
  const dp = []
  let maxLen = 0

  for (let i = 0; i < n; i++) {
    dp[i] = new Map()

    for (let j = 0; j < i; j++) {
      const val = (dp[j].get(arr[i] - arr[j]) || 0) + 1
      dp[i].set(arr[j], val)
      maxLen = Math.max(maxLen, val)
    }
  }

  return maxLen === 1 ? 0 : maxLen + 1
}
