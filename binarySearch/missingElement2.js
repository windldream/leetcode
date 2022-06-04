/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  const n = nums.length

  if (k > missing(n - 1, nums)) {
    return nums[n - 1] + k - missing(n - 1, nums)
  }

  let l = 0
  let r = n - 1
  let idx = -1

  while (l <= r) {
    const mid = (l + r) >> 1

    if (missing(mid, nums) < k) {
      idx = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return nums[idx] + k - missing(idx, nums)

  function missing(idx, nums) {
    return nums[idx] - nums[0] - idx
  }
}
