/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const n = nums.length
  if (n < 2) return false

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) return true
  }

  if (k === 0) return false

  const counter = new Map()
  counter.set(0, -1)
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    const mod = sum % k
    if (counter.has(mod)) {
      if (i - counter.get(mod) > 1) return true
    } else {
      counter.set(mod, i)
    }
  }
  return false
}
