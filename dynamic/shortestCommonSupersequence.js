/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
  const m = str1.length,
    n = str2.length,
    dp = Array(m + 1)
      .fill(0)
      .map(() => Array(n + 1).fill(''));
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = '';
        continue;
      }
      if (str1[i - 1] === str2[j - 1]) {
        if (dp[i][j].length < dp[i - 1][j - 1].length + 1) {
          dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
        }
      } else {
        if (dp[i - 1][j].length > dp[i][j - 1].length) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 1];
        }
      }
    }
  }

  let str = '',
    lcs = dp[m][n];
  let i = 0,
    j = 0;
  for (let ch of lcs) {
    while (i < m && str1[i] !== ch) {
      str += str1[i++];
    }
    while (j < n && str2[j] !== ch) {
      str += str2[j++];
    }
    str += ch;
    i++;
    j++;
  }

  return str + str1.substring(i) + str2.substring(j);
};

console.log(shortestCommonSupersequence('baaacbcbc', 'bacbcaca'));
