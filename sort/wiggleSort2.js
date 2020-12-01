/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const len = nums.length
  if (len < 2) return
  nums.sort((a, b) => a - b)
  for (let i = 1; i < len; i += 2) {
    if (i + 1 < len) {
      ;[nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
    }
  }
}

wiggleSort([3, 5, 2, 1, 6, 4])

// [1, 2, 3]
// [1, 3, 2]
// [1, 2, 3, 4]
// [1, 3, 2, 4]
