/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function (nums) {
  const len = nums.length
  const max = Math.max(...nums)
  const minPrime = Array(max + 1).fill(0)
  for (let i = 2; i <= max; i++) {
    if (minPrime[i] < 2) {
      for (let j = i; j <= max; j += i) {
        minPrime[j] = i
      }
    }
  }

  const dp = Array(len).fill(0)
  const mapIndex = new Map()
  for (let i = 0; i < len; i++) {
    dp[i] = i > 0 ? dp[i - 1] + 1 : 1
    let num = nums[i]
    while (num > 1) {
      const factor = minPrime[num]
      let minIndex = -1
      if (mapIndex.has(factor)) {
        minIndex = mapIndex.get(factor)
      } else {
        minIndex = i
        mapIndex.set(factor, i)
      }
      if (minIndex > 0) {
        dp[i] = Math.min(dp[i], dp[minIndex - 1] + 1)
      } else {
        dp[i] = 1
      }
      if (dp[i] < dp[minIndex]) {
        mapIndex.set(factor, i)
      }
      num = num / factor
    }
  }
  return dp[len - 1]
}
