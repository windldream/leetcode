/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = function(n) {
  const dp = []
  dp[1] = ['0', '1', '8']
  dp[2] = ['11', '69', '88', '96']
  if (n <= 2) return dp[n]

  const pair = ['00', '11', '88', '69', '96']
  let count = 3
  while (count <= n) {
    const nums = []
    if ((count - 1) % 2 === 0) {
      for (const item of dp[count - 1]) {
        for (const num of dp[1]) {
          const mid = item.length >> 1
          nums.push(item.slice(0, mid) + num + item.slice(mid))
        }
      }
    } else {
      for (const item of dp[count - 2]) {
        for (const num of pair) {
          const mid = item.length >> 1
          nums.push(item.slice(0, mid) + num + item.slice(mid))
        }
      }
    }
    dp[count++] = nums
  }
  return dp[n]
};