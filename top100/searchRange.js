/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1
  let end = -1
  search(nums, target, 0, nums.length - 1)
  if (start === -1 && end === -1) {
    return [start, end]
  }
  if (end === -1) {
    return [start, start]
  }
  return [start, end]

  function search(nums, target, l, r) {
    while (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] === target) {
        if (start === -1) {
          start = mid
        } else if (end === -1) {
          if (mid > start) {
            end = mid
          } else {
            end = start
            start = mid
          }
        } else {
          if (mid < start) {
            start = mid
          } else if (mid > end) {
            end = mid
          }
        }
        if (nums[mid - 1] === target) {
          search(nums, target, l, mid - 1)
        }
        if (nums[mid + 1] === target) {
          search(nums, target, mid + 1, r)
        }
        return
      } else if (nums[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }
}

searchRange([2, 2], 2)
