/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  const stack = []
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) {
      stack.pop()
    }
    stack.push(nums[i])
  }

  const stack2 = []
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack2.length && stack2[stack2.length - 1] <= nums[i]) {
      stack2.pop()
    }
    stack2.push(nums[i])
  }

  return nums.length - stack.length <= 1 || nums.length - stack2.length <= 1
}
