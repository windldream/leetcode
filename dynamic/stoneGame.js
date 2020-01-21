/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
  const len = piles.length,
    dp = [];

  // dp[i][j][0] 表示先手所能获得的最大分数
  // dp[i][j][1] 表示后手所能获得的最大分数
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i][j] = Array(2).fill(0);
    }
  }

  for (let i = 0; i < len; i++) {
    dp[i][i][0] = piles[i];
    dp[i][i][1] = 0;
  }

  for (let l = 2; l <= len; l++) {
    for (let i = 0; i <= len - l; i++) {
      const j = l + i - 1;
      const left = piles[i] + dp[i + 1][j][1];
      const right = piles[j] + dp[i][j - 1][1];

      if (left > right) {
        dp[i][j][0] = left;
        dp[i][j][1] = dp[i + 1][j][0];
      } else {
        dp[i][j][0] = right;
        dp[i][j][1] = dp[i][j - 1][0];
      }
    }
  }

  return dp[0][len - 1][0] > dp[0][len - 1][1];
};

console.log(stoneGame([5, 3, 4, 5]));
