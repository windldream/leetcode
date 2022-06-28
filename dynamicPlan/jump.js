/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // const n = nums.length
  // const f = Array(n).fill(Infinity)
  // f[0] = 0

  // for (let i = 1; i < n; i++) {
  //   for (let j = i - 1; j >= 0; j--) {
  //     if (f[j] !== Infinity && nums[j] + j >= i) {
  //       f[i] = Math.min(f[i], f[j] + 1)
  //     }
  //   }
  // }

  // return f[n - 1]

  const n = nums.length

  if (n === 1) return 0

  let reach = 0
  let nextReach = nums[0]
  let step = 0

  for (let i = 0; i < n; i++) {
    nextReach = Math.max(nextReach, i + nums[i])
    if (nextReach >= n - 1) return step + 1

    if (i === reach) {
      step++
      reach = nextReach
    }
  }

  return step
}
