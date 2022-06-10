/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length
  const fl = Array(n).fill(1)
  const fr = Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        fl[i] = Math.max(fl[i], fl[j] + 1)
      }
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        fr[i] = Math.max(fr[i], fr[j] + 1)
      }
    }
  }

  let max = 0

  for (let i = 0; i < n; i++) {
    if (fl[i] > 1 && fr[i] > 1) {
      max = Math.max(max, fl[i] + fr[i] - 1)
    }
  }

  return n - max
}
