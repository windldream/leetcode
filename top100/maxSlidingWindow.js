/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  const stack = []
  const ans = []
  for (let i = 0; i < n; i++) {
    if (i - k === stack[0]) {
      stack.shift()
    }
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      stack.pop()
    }
    stack.push(i)
    if (i >= k - 1) {
      ans.push(nums[stack[0]])
    }
  }
  return ans
}

// [1, 3, -1, -3, 5, 3, 6, 7] stack -> [3, -1] 3
// [1, 3, -1, -3, 5, 3, 6, 7] stack -> [3, -1, -3] 3
// [1, 3, -1, -3, 5, 3, 6, 7] stack -> [5] 5
// [1, 3, -1, -3, 5, 3, 6, 7] stack -> [5, 3] 5
// [1, 3, -1, -3, 5, 3, 6, 7] stack -> [6] 6
