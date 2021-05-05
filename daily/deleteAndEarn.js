/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }

  const uniqueNums = [...counter.keys()].sort((a, b) => a - b)
  const n = uniqueNums.length
  // 0 -> 删除
  // 1 -> 不删除
  const dp = Array(n).fill(0)
  dp[0] = uniqueNums[0] * counter.get(uniqueNums[0])
  for (let i = 1; i < n; i++) {
    const score = uniqueNums[i] * counter.get(uniqueNums[i])
    if (uniqueNums[i] === uniqueNums[i - 1] + 1) {
      dp[i] = Math.max((dp[i - 2] || 0) + score, dp[i - 1])
    } else {
      dp[i] = dp[i - 1] + score
    }
  }
  return dp[n - 1]
}

deleteAndEarn([3, 4, 2])

// nums[i] -> cur = prev + nums[i]

// 3 = 4 - 1
// 3 = 2 + 1
