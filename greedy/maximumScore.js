/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const n = nums.length
  let ans = -Infinity
  const left = Array(n).fill(-1)
  const right = Array(n).fill(-1)
  const descreseStack = []
  for (let i = 0; i < n; i++) {
    while (descreseStack.length && nums[descreseStack[descreseStack.length - 1]] > nums[i]) {
      right[descreseStack.pop()] = i
    }
    descreseStack.push(i)
  }

  const increaseStack = []
  for (let i = n - 1; i >= 0; i--) {
    while (increaseStack && nums[increaseStack[increaseStack.length - 1]] > nums[i]) {
      left[increaseStack.pop()] = i
    }
    increaseStack.push(i)
  }

  for (let i = 0; i < n; i++) {
    const l = left[i] === -1 ? 0 : left[i] + 1
    const r = right[i] === -1 ? n - 1 : right[i] - 1
    if (l <= k && r >= k) {
      ans = Math.max(ans, nums[i] * (r - l + 1))
    }
  }
  return ans
}

maximumScore([1, 4, 3, 7, 4, 5], 3)
