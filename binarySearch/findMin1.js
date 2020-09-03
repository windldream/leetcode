/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  let l = 0
  let r = len - 1
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[r]) {
      r = mid
    } else if (nums[mid] > nums[r]) {
      l = mid + 1
    } else {
      r--
    }
  }

  return nums[l]
}

findMin([2, 2, 2, 0, 1])
