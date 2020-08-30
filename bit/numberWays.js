/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function (hats) {
  const MOD = 10 ** 9 + 7
  const n = hats.length
  const dp = Array(1 << n).fill(0)
  dp[0] = 1
  const choose = Array(41)
    .fill(0)
    .map(() => new Set())
  // 每个帽子可以选择的人
  for (let i = 0; i < n; i++) {
    for (const hat of hats[i]) {
      choose[hat].add(i)
    }
  }
  for (let i = 1; i <= 40; i++) {
    for (let state = (1 << n) - 1; state >= 0; state--) {
      for (const person of choose[i]) {
        // 当前的人已被选过
        if (state & (1 << person)) continue
        let next = state + (1 << person)
        dp[next] += dp[state]
        dp[next] %= MOD
      }
    }
  }

  return dp[(1 << n) - 1]
}
