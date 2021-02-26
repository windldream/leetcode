/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] === target) return mid
    if (nums[l] <= nums[mid]) {
      // l -> mid 有序
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else if (nums[l] > nums[mid]) {
      // mid -> r 有序
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}

// [4,5,6,7,0,1,11] 8

// [1, 2, 3, 4, 7, 8, 9]
// [1, 4, 3, 2, 7, 8, 9]
