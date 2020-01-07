/**
 * @param {number[]} stones
 * @return {boolean}
 */
// dp[i][j] 表示从j位置到i位置跳跃的步数
var canCross = function (stones) {
  if (stones.length < 2) {
    return true;
  }

  const len = stones.length,
    dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(0);
  }
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (i === 1) {
        let dis = stones[i] - stones[j];
        if (dis > 1) {
          continue;
        }
        if (dis === 1) {
          dp[i][j] = 1;
        }
        continue;
      }
      if (j === 0) {
        dp[i][j] = 0;
        continue;
      }
      for (let s = 0; s < j; s++) {
        let k = dp[j][s];
        if (k <= 0) {
          continue;
        }
        let dis = stones[i] - stones[j];
        if (dis > k + 1 || dis < k - 1) {
          continue;
        }
        if (dis === k - 1) {
          dp[i][j] = k - 1;
        } else if (dis === k) {
          dp[i][j] = k;
        } else {
          dp[i][j] = k + 1;
        }
      }
    }
  }

  return dp[len - 1].some(val => val != 0);
};

console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]))