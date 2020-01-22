/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
var numMusicPlaylists = function(N, L, K) {
  const dp = Array(L + 1)
      .fill(0)
      .map(() => Array(N + 1).fill(0)),
    M = 10 ** 9 + 7;

  dp[0][0] = 1; // []
  // dp[i][j] 表示 i 首歌单包含 j 首歌
  for (let i = 1; i <= L; i++) {
    for (let j = 1; j <= i; j++) {
      // 最后一首没播过
      dp[i][j] = (dp[i][j] + dp[i - 1][j - 1] * (N - j + 1)) % M;
      // 最后一首播过
      dp[i][j] = (dp[i][j] + dp[i - 1][j] * Math.max(j - K, 0)) % M;
    }
  }

  return dp[L][N];
};

console.log(numMusicPlaylists(3, 3, 1));
