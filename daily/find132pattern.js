/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const n = nums.length
  if (n < 3) return false
  const stack = []
  let last = -Infinity
  for (let i = n - 1; i >= 0; i--) {
    // last对应的索引肯定是大于i， 并且大于栈顶元素的索引，值小于栈顶元素
    // nums[i] < nums[last] < nums[top]
    // i < top < last
    if (last > nums[i]) return true
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      last = stack.pop()
    }
    stack.push(nums[i])
  }
  return false
}

find132pattern([-1, 3, 2, 4])

// [4]
// [4, 2]
// [4, 3] 2
//
