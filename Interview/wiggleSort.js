/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (nums.length < 2) return
  const n = nums.length
  for (let i = 1; i < n; i++) {
    // 奇数位要小
    // 偶数位要大
    if (i & 1) {
      if (nums[i] > nums[i - 1]) {
        swap(nums, i, i - 1)
      }
    } else {
      if (nums[i] < nums[i - 1]) {
        swap(nums, i, i - 1)
      }
    }
  }

  function swap(nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
}

wiggleSort([3, 5, 2, 1, 6, 4])

// 2 4 2 4

// [2, 6, 4]
// [6, 2, 4]
// [1, 2, 3]
// [2, 1, 3]
