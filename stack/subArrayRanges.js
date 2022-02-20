/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  const n = nums.length

  // nums[i]作为最大值的贡献度
  const stack = []
  let right = Array(n).fill(n)

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      right[stack.pop()] = i
    }

    stack.push(i)
  }

  stack.length = 0
  let left = Array(n).fill(-1)

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      left[stack.pop()] = i
    }

    stack.push(i)
  }

  let ans = 0

  for (let i = 0; i < n; i++) {
    ans += (i - left[i]) * (right[i] - i) * nums[i]
  }

  // nums[i]作为最小值的贡献度
  stack.length = 0
  right = Array(n).fill(n)

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
      right[stack.pop()] = i
    }

    stack.push(i)
  }

  stack.length = 0
  left = Array(n).fill(-1)

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      left[stack.pop()] = i
    }

    stack.push(i)
  }

  for (let i = 0; i < n; i++) {
    ans -= (i - left[i]) * (right[i] - i) * nums[i]
  }

  return ans
}
