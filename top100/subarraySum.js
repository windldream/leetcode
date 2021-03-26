/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let ans = 0
  let sum = 0
  const sumMap = new Map()
  sumMap.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sumMap.has(sum - k)) {
      ans += sumMap.get(sum - k)
    }
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
  }
  return ans
}

// sum - k = val
