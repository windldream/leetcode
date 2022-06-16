/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let lo = Math.min(...nums)
  let hi = Math.max(...nums)
  let prev = hi
  let error = Infinity

  while (error > 1e-5) {
    const mid = (lo + hi) / 2

    if (check(nums, mid, k)) {
      lo = mid
    } else {
      hi = mid
    }

    error = Math.abs(prev - mid)
    prev = mid
  }

  return lo

  function check(nums, mid, k) {
    let sum = 0
    let prev = 0
    let minSum = 0

    for (let i = 0; i < k; i++) sum += nums[i] - mid

    if (sum >= 0) return true

    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - mid
      prev += nums[i - k] - mid
      minSum = Math.min(prev, minSum)

      if (sum - minSum >= 0) return true
    }

    return false
  }
}
