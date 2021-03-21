/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
  const n = nums.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const num = nums[i] ^ nums[j]
      if (num >= low && num <= high) ans += 1
    }
  }
  return ans
}
