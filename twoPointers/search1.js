/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const len = nums.length
  if (len === 0) return false
  if (len === 1) return nums[0] === target

  let l = 0
  let r = len - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] === target) return true
    if (nums[l] === nums[mid]) {
      l++
      continue
    }
    if (nums[l] < nums[mid]) {
      // [l, mid] 有序
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      // [mid, r] 有序
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return false
}

search([1, 3, 1, 1, 1], 3)
