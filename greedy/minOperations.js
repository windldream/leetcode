/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const len = nums.length
  let ans = 0
  while (true) {
    let sum = 0
    for (let i = 0; i < len; i++) {
      if (nums[i] & 1) {
        nums[i] -= 1
        ans++
      }
      sum += nums[i]
    }
    if (sum === 0) return ans
    for (let i = 0; i < len; i++) {
      nums[i] = nums[i] >> 1
      sum += nums[i]
    }
    ans++
  }
}
