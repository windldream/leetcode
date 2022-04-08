/**
 * @param {number[]} nums
 * @param {number} numSlots
 * @return {number}
 */
var maximumANDSum = function (nums, numSlots) {
  const n = nums.length
  const num = 1 << (2 * numSlots)
  const dp = Array(num).fill(0)
  let ans = 0

  for (let i = 0; i < num; i++) {
    const count = countBit(i)
    if (count >= n) continue

    for (let j = 0; j < 2 * numSlots; j++) {
      if ((i & (1 << j)) === 0) {
        const m = i | (1 << j)
        dp[m] = Math.max(dp[m], dp[i] + (((j >> 1) + 1) & nums[count]))
        ans = Math.max(ans, dp[m])
      }
    }
  }

  return ans

  function countBit(num) {
    let count = 0

    while (num) {
      num &= num - 1
      count++
    }

    return count
  }
}
