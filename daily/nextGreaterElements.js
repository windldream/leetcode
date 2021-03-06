/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length
  const stack = []
  const ans = Array(n).fill(-1)
  for (let i = 0; i < n * 2; i++) {
    const num = nums[i % n]
    while (stack.length && nums[stack[stack.length - 1]] < num) {
      ans[stack.pop()] = num
    }
    if (i < n) {
      stack.push(i)
    }
  }
  return ans
}

nextGreaterElements([1, 2, 1])

// [1, 2, 1, 1, 2, 1]
