/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let len = s.length,
    res = [],
    dp = [];

  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
      }
    }
  }

  if (!dp[len]) {
    return [];
  }
  dfs(s, []);

  return res;

  // TODO 记忆化优化
  function dfs(s, str) {
    if (s.length === 0) {
      res.push(str.join(' '));
      return;
    }

    for (let i = 1; i <= s.length; i++) {
      if (wordDict.includes(s.substring(0, i))) {
        str.push(s.substring(0, i))
        dfs(s.substring(i), str.slice())
        str.pop();
      }
    }
  }
};

console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));