/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let k = 0; k <= K + 1; k++) {
      dp[i][k] = Infinity;
    }
  }

  // dp[i][k]表示从src至多经过k站到达i的最少费用
  for (let k = 0; k <= K + 1; k++) {
    dp[src][k] = 0;
  }

  // 从 a 直接到 b 经过 0 站 故需遍历到 K + 1
  for (let k = 1; k <= K + 1; k++) {
    for (let i = 0; i < flights.length; i++) {
      const flight = flights[i];
      if (dp[flight[0]][k - 1] !== Infinity) {
        dp[flight[1]][k] = Math.min(
          dp[flight[1]][k],
          dp[flight[0]][k - 1] + flight[2]
        );
      }
    }
  }

  return dp[dst][K + 1] === Infinity ? -1 : dp[dst][K + 1];
};

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500]
    ],
    0,
    2,
    1
  )
);
