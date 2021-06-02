/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) nums[i] = -1
  }

  const counter = new Map()
  counter.set(0, -1)
  let sum = 0
  let ans = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (counter.has(sum)) {
      ans = Math.max(ans, i - counter.get(sum))
    } else {
      counter.set(sum, i)
    }
  }

  return ans
}

findMaxLength([0, 1, 0, 0, 1, 1])
