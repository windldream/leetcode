/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
  if (K === 0 || N >= K + W) {
    return 1;
  }
  const dp = Array(N + 1).fill(0);
  let res = 0,
    sum = 0;
  // 计算总和不大于 N 的概率
  for (let i = 1; i <= N; i++) {
    if (i <= W) {
      // 选择 1 到 i - 1 再选择 i - 1 到 1 或者直接选择 W
      // dp[i] = dp[1] / W + dp[2] / W + ... + dp[min(k - 1, i - 1)] / W + 1 / W
      dp[i] = sum / W + 1 / W;
    } else {
      // 选择 x - 1 到 x - W 再选择 1 到 W
      // dp[i - W] / W + dp[i - W + 1] / W + ... + dp[min(k - 1, i - 1)] / W
      dp[i] = sum / W;
    }
    // i < K 时为满足得分不小于 K 的前提
    if (i < K) {
      sum += dp[i];
    }
    // i > W 则之前的 则 i - W + 加上 [1, W] 中的任何数字都不满足等于 i 的条件
    if (i > W) {
      sum -= dp[i - W];
    }
    // 累加满足 K <= i <= N 的概率和
    if (i >= K) {
      res += dp[i];
    }
  }

  return res;
};

console.log(new21Game(21, 17, 10));
