/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  const len = arr.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i]
  }

  let ans = 0
  for (let i = 0; i <= len - k; i++) {
    const sum = prefixSum[i + k] - prefixSum[i]
    if (sum / k >= threshold) ans++
  }
  return ans
}
