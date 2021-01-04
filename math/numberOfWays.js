/**
 * @param {number} num_people
 * @return {number}
 */
const numberOfWays = function (num_people) {
  const mod = BigInt(10 ** 9 + 7)
  const dp = Array(num_people).fill(1n)
  for (let i = 2; i <= num_people; i++) {
    dp[i] = 0n
    for (let j = 1; j < i; j += 2) {
      dp[i] = (dp[i] + dp[j - 1] * dp[i - j - 1]) % mod
    }
  }
  return dp[num_people]
}
