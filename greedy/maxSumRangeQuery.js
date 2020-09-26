/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function (nums, requests) {
  const mod = 10 ** 9 + 7
  const len = nums.length
  const count = Array(len).fill(0)
  let ans = 0
  for (const [start, end] of requests) {
    count[start] += 1
    if (end + 1 < n) {
      count[end + 1] -= 1
    }
  }
  for (let i = 1; i < len; i++) {
    count[i] += count[i - 1]
  }

  count.sort((a, b) => a - b)
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    ans = (ans + count[i] * nums[i]) % mod
  }
  return ans
}
