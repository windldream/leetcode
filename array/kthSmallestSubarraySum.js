/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kthSmallestSubarraySum = function (nums, k) {
  let low = Math.min(...nums)
  let hign = nums.reduce((pre, cur) => pre + cur, 0)

  while (low < hign) {
    const mid = ((hign - low) >> 1) + low
    const count = countSubArrays(nums, mid)

    if (count < k) {
      low = mid + 1
    } else {
      hign = mid
    }
  }

  return low

  // 计算子数组小于阈值的个数
  function countSubArrays(nums, threshold) {
    const n = nums.length
    let count = 0
    let sum = 0
    let l = 0
    let r = 0

    while (r < n) {
      sum += nums[r++]
      while (sum > threshold) {
        sum -= nums[l++]
      }
      count += r - l
    }

    return count
  }
}
