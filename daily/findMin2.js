/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    // 右半边有序
    if (nums[r] > nums[mid]) {
      r = mid
    } else if (nums[r] < nums[mid]) {
      // 左半边有序
      l = mid + 1
    } else {
      r--
    }
  }
  return nums[l]
}

findMin([1, 3])
// 4 2 4
