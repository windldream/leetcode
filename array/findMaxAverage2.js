/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let max = Math.max(...nums)
  let min = Math.min(...nums)
  let prevMid = max
  let error = Infinity
  while (error > 0) {
    const mid = (max + min) / 2
    if (check(nums, mid, k)) {
      min = mid
    } else {
      max = mid
    }
    error = Math.abs(prevMid - mid)
    prevMid = mid
  }
  return min

  function check(nums, mid, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
      sum += nums[i] - mid
    }
    if (sum >= 0) return true

    let prev = 0
    let minSum = 0
    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - mid
      prev += nums[i - k] - mid
      minSum = Math.min(prev, minSum)
      if (sum - minSum >= 0) return true
    }
    return false
  }
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4)
