/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumMountainRemovals = function (nums) {
  const n = nums.length
  // 以 i 为结尾的最长递减子序列
  const dl = Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dl[i] = Math.max(dl[i], dl[j] + 1)
      }
    }
  }

  // 以 i 为开头的最长递减子序列
  const dr = Array(n).fill(1)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        dr[i] = Math.max(dr[i], dr[j] + 1)
      }
    }
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    if (dl[i] > 1 && dr[i] > 1) {
      ans = Math.max(ans, dl[i] + dr[i] - 1)
    }
  }
  return n - ans
}

minimumMountainRemovals([100, 92, 89, 77, 74, 66, 64, 66, 64])
