/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  const len = pairs.length,
    dp = [];

  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j <= i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[len - 1];
};

console.log(
  findLongestChain([
    [1, 2],
    [2, 3],
    [3, 4]
  ])
);
