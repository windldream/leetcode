/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  const n = arr.length
  const preSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] ^ arr[i]
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = preSum[j] ^ preSum[i]
      for (let k = j; k < n; k++) {
        const b = preSum[k + 1] ^ preSum[j]
        if (a === b) ans += 1
      }
    }
  }
  return ans
}
