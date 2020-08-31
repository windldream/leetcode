/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    if (nums[l] === 0) {
      while (nums[r] === 0) {
        r--
      }
      nums.splice(l, 1)
      l--
      nums.push(0)
      r--
    }
    l++
  }
}
