/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
  const len = s.length,
    sum = Array(len)
      .fill(0)
      .map(() => Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      sum[i][j] = getMaxNum(s.substr(i, j - i + 1));
    }
  }

  const dp = Array(len + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(Infinity));

  for (let i = 0; i <= k; i++) {
    dp[0][i] = 0;
  }
  for (let i = 1; i <= len; i++) {
    dp[i][1] = sum[0][i - 1];
  }
  for (let i = 1; i <= len; i++) {
    for (let j = 2; j <= k; j++) {
      for (let m = 1; m < i; m++) {
        dp[i][j] = Math.min(dp[i][j], sum[m][i - 1] + dp[m][j - 1]);
      }
    }
  }

  return dp[len][k];

  function getMaxNum(str) {
    const len = str.length;
    let res = 0;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - i - 1]) {
        res++;
      }
    }
    return res;
  }
};

console.log(palindromePartition('abc', 2));
