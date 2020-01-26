/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  const len = A[0].length,
    dp = Array(len).fill(1);

  // dp[i] 表示最多可能保存的列数
  for (i = len - 2; i >= 0; i--) {
    label: for (let j = i + 1; j < len; j++) {
      for (let str of A) {
        if (str[i] > str[j]) {
          continue label;
        }
      }
      dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  }

  return len - Math.max.apply(null, dp);
};

console.log(minDeletionSize(['babca', 'bbazb']));
