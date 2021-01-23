/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  const mod = 10 ** 9 + 7
  const len = arr.length
  arr.sort((a, b) => a - b)
  const dp = Array(len).fill(1)
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.set(arr[i], i)
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0) {
        const num = arr[i] / arr[j]
        if (map.has(num)) {
          dp[i] = (dp[i] + dp[j] * dp[map.get(num)]) % mod
        }
      }
    }
  }

  let ans = 0
  for (const num of dp) ans = (ans + num) % mod
  return ans
}
