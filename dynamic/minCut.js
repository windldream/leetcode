/**
 * @param {string} s
 * @return {number}
 */
// 假设d[i][j]表示s中从i到j是否为回文
var minCut = function (s) {
  let len = s.length,
    dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i][j] = 0;
    }
  }

  for (let k = 1; k <= len; k++) {
    for (let i = 0; i <= len - k; i++) {
      let j = i + k - 1;
      // 判断是否回文
      dp[i][j] = s[i] === s[j] && (k < 3 || dp[i + 1][j - 1]);
    }
  }

  let min = [];
  min[0] = 0;
  for (let i = 1; i < len; i++) {
    let temp = Infinity;
    for (let j = 0; j <= i; j++) {
      if (dp[j][i]) {
        if (j === 0) {
          temp = 0;
          break;
        } else {
          temp = Math.min(temp, min[j - 1] + 1);
        }
      }
    }
    min[i] = temp;
  }

  return min[len - 1];
};

console.log(minCut('aab'))