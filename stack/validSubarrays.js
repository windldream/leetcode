/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function (nums) {
  const stack = []
  const len = nums.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      ans += i - 1 - stack.pop() + 1
    }
    stack.push(i)
  }
  while (stack.length) {
    ans += len - stack.pop()
  }
  return ans
}

validSubarrays([1, 4, 2, 5, 3])

// [1] [4] [1, 4] [2] [5] [2, 5] [3]
