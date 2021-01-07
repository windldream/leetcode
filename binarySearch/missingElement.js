/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingElement = function (nums, k) {
  let lo = 0
  let hi = nums.length
  while (lo < hi) {
    const mid = (lo + hi) >> 1
    if (getCount(nums, mid) < k) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return nums[lo - 1] + k - getCount(nums, lo - 1)

  function getCount(nums, end) {
    return nums[end] - nums[0] - end
  }
}

missingElement([89248, 1001459, 1923894, 2312461, 4064902, 4502493, 8228616, 8262691, 8654597, 9635457], 10)
