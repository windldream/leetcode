/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function (nums) {
  const len = nums.length
  let ans = 0
  for (let i = 0; i < len - 1; i++) {
    ans += Math.abs(nums[i] - nums[i + 1])
  }

  let maxv = 0
  for (let i = 0; i < len; i++) {
    if (i !== len - 1) {
      maxv = Math.max(maxv, Math.abs(nums[0] - nums[i + 1]) - Math.abs(nums[i] - nums[i + 1]))
    }
    if (i !== 0) {
      maxv = Math.max(maxv, Math.abs(nums[len - 1] - nums[i - 1]) - Math.abs(nums[i] - nums[i - 1]))
    }
  }

  const mx = [1, 1, -1, -1]
  const my = [1, -1, 1, -1]
  for (let i = 0; i < 4; i++) {
    const v1 = []
    const v2 = []
    for (let j = 0; j < len - 1; j++) {
      const a = mx[i] * nums[j]
      const b = my[i] * nums[j + 1]
      const cur = Math.abs(nums[j] - nums[j + 1])
      v1.push(a + b - cur)
      v2.push(a + b + cur)
    }
    const a = Math.max(...v1)
    const b = Math.min(...v2)
    maxv = Math.max(maxv, a - b)
  }
  return ans + maxv
}
