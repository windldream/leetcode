/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let l = 0
  let r = nums[n - 1] - nums[0]
  let ans = l

  while (l <= r) {
    const mid = (l + r) >> 1
    let count = 0

    // 小于mid的对数
    for (let i = 1, j = 0; i < n; i++) {
      while (nums[i] - nums[j] > mid) j++
      count += i - j
    }

    if (count >= k) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}
