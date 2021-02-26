/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0
  let r = nums.length - 1
  let cur = 0
  while (cur <= r) {
    if (nums[cur] === 0) {
      ;[nums[cur], nums[l]] = [nums[l], nums[cur]]
      l++
      cur++
    } else if (nums[cur] === 2) {
      ;[nums[cur], nums[r]] = [nums[r], nums[cur]]
      r--
    } else {
      cur++
    }
  }
}

sortColors([2, 0, 1])
// 2 0
