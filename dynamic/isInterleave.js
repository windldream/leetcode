/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// s3(1, len1 + len2 - 1) === s1(1, len1 - 1) + s2 || s1 + s2(1, len2 - 1)
var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const len1 = s1.length, len2 = s2.length, dp = [];

  // j - 1表示去s2取字符串 i - 1表示去s1取字符串
  for (let i = 0; i <= len1; i++) {
    dp[i] = [];
    for (let j = 0; j <= len2; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
      } else {
        dp[i][j] = (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) || (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
      }
    }
  }

  return dp[len1][len2];
};

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))