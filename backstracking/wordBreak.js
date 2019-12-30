/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let len = s.length,
    dp = [];

  dp[0] = [''];
  for (let i = 1; i <= len; i++) {
    let list = [];
    for (let j = 0; j < i; j++) {
      if (dp[j].length && wordDict.includes(s.substring(j, i))) {
        dp[j].forEach(item => {
          list.push(item + (item ? ' ' : '') + s.substring(j, i));
        });
      }
    }
    dp[i] = list;
  }

  return dp[len];
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));