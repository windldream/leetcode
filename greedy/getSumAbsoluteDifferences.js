/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  const len = nums.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }

  const res = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    const prefix = nums[i] * (i + 1) - prefixSum[i + 1]
    const postfix = prefixSum[len] - prefixSum[i + 1] - nums[i] * (len - i - 1)
    res[i] = prefix + postfix
  }
  return res
}

getSumAbsoluteDifferences([1, 4, 6, 8, 10])
