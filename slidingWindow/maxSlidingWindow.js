/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length
  if (len === 0) return []

  const stack = []
  const ans = []
  for (let i = 0; i < len; i++) {
    // 单调递减的栈
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop()
    }
    stack.push(i)
    if (stack[0] <= i - k) {
      stack.shift()
    }
    if (i - k + 1 >= 0) {
      ans.push(nums[stack[0]])
    }
  }
  return ans
}
