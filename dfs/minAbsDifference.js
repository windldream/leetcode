/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function (nums, goal) {
  const n = nums.length
  const half = n >> 1
  const l = half
  const r = n - half

  const lsum = Array(1 << l).fill(0)
  for (let i = 1; i < 1 << l; i++) {
    for (let j = 0; j < l; j++) {
      if ((i & (1 << j)) === 0) continue
      lsum[i] = lsum[i - (1 << j)] + nums[j]
      break
    }
  }

  const rsum = Array(1 << r).fill(0)
  for (let i = 0; i < 1 << r; i++) {
    for (let j = 0; j < r; j++) {
      if ((i & (1 << j)) === 0) continue
      rsum[i] = rsum[i - (1 << j)] + nums[l + j]
      break
    }
  }

  lsum.sort((a, b) => a - b)
  rsum.sort((a, b) => a - b)

  let ans = Infinity
  for (const num of lsum) {
    ans = Math.min(ans, Math.abs(num - goal))
  }
  for (const num of rsum) {
    ans = Math.min(ans, Math.abs(num - goal))
  }

  let i = 0
  let j = rsum.length - 1
  while (i < lsum.length && j >= 0) {
    const sum = lsum[i] + rsum[j]
    ans = Math.min(ans, Math.abs(sum - goal))
    if (sum > goal) {
      j--
    } else {
      i++
    }
  }
  return ans
}
