/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  const len = jobDifficulty.length;
  if (len < d) {
    return -1;
  }

  const dp = Array(len + 1)
    .fill(0)
    .map(() => Array(d + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= d; j++) {
      let max = 0;
      // 前 k 项任务 j - 1 天完成
      // 剩下的最后一天完成
      for (let k = i - 1; k >= j - 1; k--) {
        // 要完成所有的依赖项
        max = Math.max(max, jobDifficulty[k]);
        dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + max);
      }
    }
  }

  return dp[len][d];
};
