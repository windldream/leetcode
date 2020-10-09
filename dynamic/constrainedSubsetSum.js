/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  const len = nums.length
  const dp = Array(len).fill(0)
  const queue = []
  let ans = -Infinity
  for (let i = 0; i < len; i++) {
    if (queue.length && i - queue[0] > k) {
      queue.shift()
    }
    dp[i] = Math.max(0, queue.length ? dp[queue[0]] : 0) + nums[i]
    while (queue.length && dp[queue[queue.length - 1]] < dp[i]) {
      queue.pop()
    }
    queue.push(i)
    ans = Math.max(ans, dp[i])
  }
  return ans
}

constrainedSubsetSum([10, 2, -10, 5, 20], 2)
