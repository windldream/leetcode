/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // const n = nums.length
  // const f = Array(n).fill(false)
  // f[0] = true

  // for (let i = 1; i < n; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (f[j] && nums[j] + j >= i) {
  //       f[i] = true
  //       break
  //     }
  //   }
  // }

  // return f[n - 1]

  const n = nums.length
  let max = 0

  for (let i = 0; i < n; i++) {
    if (i > max) return false
    max = Math.max(max, i + nums[i])
    if (max >= n - 1) return true
  }

  return true
}
