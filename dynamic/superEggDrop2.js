/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  const dp = Array(K + 1)
    .fill(0)
    .map(() => Array(N + 1).fill(0));
  for (let m = 1; m <= N; m++) {
    for (let k = 1; k <= K; k++) {
      // 鸡蛋没碎的话 可以确定当前扔的层数不大于 F
      // 此时可以确定的最高楼数是 X + dp[k][m - 1]
      // 鸡蛋碎掉的话 可以确定当前扔的层数大于 F
      // 此时可以确定的最高楼数是 N - X + dp[k - 1][m - 1]
      dp[k][m] = dp[k - 1][m - 1] + dp[k][m - 1] + 1;
      if (dp[k][m] >= N) {
        return m;
      }
    }
  }
  return N;
};

console.log(superEggDrop(3, 14));
