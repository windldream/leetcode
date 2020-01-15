/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function(S) {
  const len = S.length,
    M = 10 ** 9 + 7;
  dp = [];

  for (let i = 0; i < len; i++) {
    dp[i] = Array(len).fill(0);
    dp[i][i] = 1;
  }

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (S[i] === S[j]) {
        let left = i + 1,
          right = j - 1;
        while (left <= right && S[left] !== S[i]) {
          left++;
        }
        while (left <= right && S[right] !== S[i]) {
          right--;
        }

        // i 和 j 之间不存在字符和 s[i] 相等
        if (left > right) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 2;
        }

        // i 和 j 之间只存在一个字符和 s[i] 相等
        if (left === right) {
          dp[i][j] = dp[i + 1][j - 1] * 2 + 1;
        }

        // aabaa 这种情况
        if (left < right) {
          dp[i][j] = dp[i + 1][j - 1] * 2 - dp[left + 1][right - 1];
        }
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1];
      }

      dp[i][j] = (dp[i][j] < 0 ? dp[i][j] + M : dp[i][j]) % M;
    }
  }

  return dp[0][len - 1];
};

console.log(
  countPalindromicSubsequences(
    'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
  )
);
