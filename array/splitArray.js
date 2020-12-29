/**
 * @param {number[]} nums
 * @return {boolean}
 */
const splitArray = function(nums) {
  const len = nums.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  for (let i = 1; i < len; i++) {
    const sum1 = prefixSum[i] - prefixSum[0]
    for (let j = i + 2; j < len; j++) {
      const sum2 = prefixSum[j] - prefixSum[i + 1]
      if (sum1 !== sum2) continue
      for (let k = j + 2; k < len; k++) {
        const sum3 = prefixSum[k] - prefixSum[j + 1]
        const sum4 = prefixSum[len] - prefixSum[k + 1]
        if (sum2 === sum3 && sum2 === sum4 && sum3 === sum4) return true
      }
    }
  }
  return false
};