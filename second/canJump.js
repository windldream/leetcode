/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > k) return false
    k = Math.max(k, i + nums[i])
    if (k >= nums.length - 1) return true
  }
  return true
}

canJump([2, 3, 1, 1, 4])
