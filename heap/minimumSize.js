/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let r = Math.max(...nums)
  let l = 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (check(nums, mid, maxOperations)) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l

  function check(nums, num, maxOperations) {
    let count = 0
    for (const val of nums) {
      if (val > num) {
        count += Math.ceil(val / num) - 1
      }
    }
    return count <= maxOperations
  }
}

minimumSize([9], 2)

// 12 4
// 8 4 4
// 4 4 4 4
