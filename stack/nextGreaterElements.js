/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let len = nums.length
  const res = Array(len).fill(0)
  const stack = []

  for (let i = 2 * len - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % len]) {
      stack.pop()
    }
    res[i % len] = stack.length ? stack[stack.length - 1] : -1
    stack.push(nums[i % len])
  }

  return res
}
