/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let ans = 0
  for (let i = 0; i <= nums.length; i++) {
    ans ^= nums[i]
    ans ^= i
  }
  return ans
}
