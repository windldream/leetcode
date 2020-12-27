/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
const strobogrammaticInRange = function(low, high) {
  const dp = []
  dp[1] = ['0', '1', '8']
  dp[2] = ['11', '69', '88', '96']
  let m = low.length
  let n = high.length
  let count = 3
  const pairs = ['00', '11', '69', '88', '96']
  while (count <= n) {
    const nums = []
    if (count & 1) {
      for (const item of dp[count - 1]) {
        for (const num of dp[1]) {
          const mid = item.length >> 1
          nums.push(item.slice(0, mid) + num + item.slice(mid))
        }
      }
    } else {
      for (const item of dp[count - 2]) {
        for (const num of pairs) {
          const mid = item.length >> 1
          nums.push(item.slice(0, mid) + num + item.slice(mid))
        }
      }
    }
    dp[count++] = nums
  }

  let ans = 0
  for (let i = m; i <= n; i++) {
    if (i === m || i === n) {
      for (const str of dp[i]) {
        if (BigInt(str) >= BigInt(low) && BigInt(str) <= BigInt(high)) ans++
      }
    } else {
      ans += dp[i].length
    }
  }
  return ans
};