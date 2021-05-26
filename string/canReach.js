/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  const n = s.length
  const dp = Array(n).fill(0)
  dp[0] = 1

  const presum = Array(n).fill(0)
  for (let i = 0; i < minJump; i++) {
    presum[i] = 1
  }

  for (let i = minJump; i < n; i++) {
    let l = i - maxJump
    let r = i - minJump
    if (s[i] === '0') {
      const total = presum[r] - (l <= 0 ? 0 : presum[l - 1])
      dp[i] = total !== 0
    }
    presum[i] = presum[i - 1] + dp[i]
  }

  return dp[n - 1]
}
