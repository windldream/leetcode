/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const len = arr.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i]
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if ((j - i) & 1) {
        ans += prefixSum[j] - prefixSum[i]
      }
    }
  }
  return ans
}
