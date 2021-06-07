/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  const sum = stones.reduce((prev, curr) => prev + curr)
  const n = sum >> 1
  const dp = Array(n + 1).fill(0)
  for (const stone of stones) {
    for (let w = n; w >= stone; w--) {
      dp[w] = Math.max(dp[w], dp[w - stone] + stone)
    }
  }
  return sum - 2 * dp[n]
}
// (sum - dp[sum >> 1]) - dp[sum >> 1]
