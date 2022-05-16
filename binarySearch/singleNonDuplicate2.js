/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  const n = nums.length
  let l = 0
  let r = n - 1
  let ans = -1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (mid % 2 === 0) {
      if (mid + 1 < n && nums[mid] === nums[mid + 1]) {
        l = mid + 1
      } else {
        ans = mid
        r = mid - 1
      }
    } else {
      if (mid - 1 >= 0 && nums[mid] === nums[mid - 1]) {
        l = mid + 1
      } else {
        ans = mid
        r = mid - 1
      }
    }
  }

  return nums[ans]
}
