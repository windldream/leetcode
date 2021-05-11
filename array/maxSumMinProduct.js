/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  const n = nums.length
  const mod = BigInt(1e9 + 7)
  const presum = Array(n).fill(0n)
  for (let i = 0; i < n; i++) {
    presum[i + 1] = presum[i] + BigInt(nums[i])
  }

  const right = Array(n).fill(n)
  let stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      right[stack.pop()] = i
    }
    stack.push(i)
  }

  const left = Array(n).fill(-1)
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      left[stack.pop()] = i
    }
    stack.push(i)
  }

  let max = 0n
  for (let i = 0; i < n; i++) {
    const l = left[i] + 1
    const r = right[i]
    const sum = BigInt(nums[i]) * (presum[r] - presum[l])
    if (sum > max) max = sum
  }
  return max % mod
}
