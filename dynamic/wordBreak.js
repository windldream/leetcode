/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length, dp = [];

    if (len === 0) {
      return true;
    }

    dp[0] = true;
    for (let i = 1; i <= len; i++) {
      for (let j = 0; j <= i; j++) {
        if (dp[j] && wordDict.includes(s.substring(j, i))) {
          dp[i] = true;
        }
      }
    }
    return !!dp[len];
};

console.log(wordBreak('leetcode', ['leet', 'code']))