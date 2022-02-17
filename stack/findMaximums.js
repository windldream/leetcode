/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMaximums = function (nums) {
  const n = nums.length
  const stackRight = []
  const maxRight = Array(n).fill(n)

  // 从左到右单调递增栈
  for (let i = 0; i < n; i++) {
    while (stackRight.length && nums[stackRight[stackRight.length - 1]] > nums[i]) {
      const last = stackRight.pop()
      maxRight[last] = i
    }
    stackRight.push(i)
  }

  const stackLeft = []
  const maxLeft = Array(n).fill(-1)

  // 从右到左单调递增栈
  for (let i = n - 1; i >= 0; i--) {
    while (stackLeft.length && nums[stackLeft[stackLeft.length - 1]] > nums[i]) {
      const last = stackLeft.pop()
      maxLeft[last] = i
    }
    stackLeft.push(i)
  }

  const ans = Array(n).fill(0)

  // 把nums[i]作为最小值可以往左右扩展的长度
  for (let i = 0; i < n; i++) {
    const idx = maxRight[i] - maxLeft[i] - 1
    ans[idx - 1] = Math.max(ans[idx - 1], nums[i])
  }

  for (let i = n - 2; i >= 0; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1])
  }

  return ans
}
