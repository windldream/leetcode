/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let len = coins.length,
    dp = []

  // f(n) = Math.min(fn(amount - coins[0]), fn(amount - coins[1]))
  // dp[amount] = Math.min(dp[amount - coins[0]], dp[amount - coins[1]])
  // dp[0] = 0;

  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (let j = 0; j < len; j++) {
      if (i >= coins[j]) {
        min = Math.min(min, dp[i - coins[j]] + 1)
      }
    }
    dp[i] = min
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log(coinChange([1], 0))
