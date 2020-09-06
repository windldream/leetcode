/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let lo = 1
  let hi = Math.max.apply(null, nums)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (getSum(nums, mid) > threshold) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo

  function getSum(nums, v) {
    return nums.reduce((pre, cur) => {
      return pre + Math.ceil(cur / v)
    }, 0)
  }
}
