/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  const f = Array(n + 1).fill(0)
  f[1] = nums[0]

  for (let i = 2; i <= n; i++) {
    f[i] = Math.max(f[i - 1], f[i - 2] + nums[i - 1])
  }

  return f[n]
}
