/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  const len = nums.length
  if (len === k) return nums
  const stack = []
  for (let i = 0; i < len; i++) {
    while (stack.length && stack[stack.length - 1] > nums[i] && len - i - 1 + stack.length >= k) {
      stack.pop()
    }
    stack.push(nums[i])
  }
  return stack.slice(0, k)
}

mostCompetitive([3, 5, 2, 6], 2)
