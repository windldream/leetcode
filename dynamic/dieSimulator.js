/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function(n, rollMax) {
  const M = 10 ** 9 + 7,
    kMaxRolls = 15,
    dp = Array(n + 1)
      .fill(0)
      .map(() =>
        Array(6)
          .fill(0)
          .map(() => Array(kMaxRolls + 1).fill(0))
      );

  for (let i = 0; i < 6; i++) {
    dp[1][i][1] = 1;
  }

  for (let i = 2; i <= n; i++) {
    // j 表示当前的骰子数
    for (let j = 0; j < 6; j++) {
      // j 表示上一次的骰子数
      for (let l = 0; l < 6; l++) {
        // 不能超过上一次允许的最大次数
        for (let k = 1; k <= rollMax[l]; k++) {
          // 上一次和当前不一样 说明只出现了一次
          if (l !== j) {
            dp[i][j][1] = (dp[i][j][1] + dp[i - 1][l][k]) % M;
          } else if (k < rollMax[j]) {
            dp[i][j][k + 1] = dp[i - 1][j][k];
          }
        }
      }
    }
  }

  let res = 0;
  for (let j = 0; j < 6; j++) {
    for (let k = 1; k <= rollMax[j]; k++) {
      res = (res + dp[n][j][k]) % M;
    }
  }

  return res;
};

console.log(dieSimulator(3, [1, 1, 2, 2, 2, 3]));
