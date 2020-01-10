/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  if (strs.length === 0 || (m === 0 && n === 0)) {
    return 0;
  }

  const len = strs.length,
    dp = [];

  for (let i = 0; i <= len; i++) {
    dp[i] = [];
    for (let j = 0; j <= m; j++) {
      dp[i][j] = [];
      for (let s = 0; s <= n; s++) {
        if (i === 0 || (j === 0 && s === 0)) {
          dp[i][j][s] = 0;
          continue;
        }
        const len0 = getNum(strs[i - 1], '0');
        const len1 = getNum(strs[i - 1], '1');
        if (j >= len0 && s >= len1) {
          dp[i][j][s] = Math.max(
            dp[i - 1][j][s],
            dp[i - 1][j - len0][s - len1] + 1
          );
        } else {
          dp[i][j][s] = dp[i - 1][j][s];
        }
      }
    }
  }

  return dp[len][m][n];

  function getNum(str, num) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == num) {
        res++;
      }
    }
    return res;
  }
};

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 4, 3));
