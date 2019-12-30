/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length, memo = {};

    if (len === 0) {
      return true;
    }

    for (let i = 1; i <= len; i++) {
      if (wordDict.includes(s.substring(0, i))) {
        if (memo[s.substring(i)] || wordBreak(s.substring(i), wordDict)) {
          memo[s.substring(i)] = false
          return true;
        }
      }
    }
    memo[s] = false;
    return false;
};

console.log(wordBreak('aaaaaaa', ["aaaa", "aaa"]))