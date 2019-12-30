/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length, dp = [], res = [];

  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {;
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        str = str.trim() ?  ' ' : '' + s.substring(j, i)
        dp[i] = true;
      }
    }
    str.trim() && res.push(str);
  }

  return res;
};

console.log(wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"]))