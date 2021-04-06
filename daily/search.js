/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (nums[mid] === target) return true
    if (nums[r] === nums[mid]) {
      r--
      continue
    }
    // 左半边有序
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1
      } else {
        // 如果nums[mid] < target || target < nums[l]
        l = mid + 1
      }
    } else if (nums[l] > nums[mid]) {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1
      } else {
        // target < nums[mid] || target > nums[r]
        r = mid - 1
      }
    }
  }
  return false
}

search([1, 0, 1, 1, 1], 0)

// 左半边有序，右半边有序
