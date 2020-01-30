/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  const len = words.length,
    dp = Array(len).fill(0);

  dp[0] = 1;
  for (let i = 1; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (compare(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);

  function compare(a, b) {
    if (b.length - a.length !== 1) {
      return false;
    }
    const len = b.length;
    for (let i = 0; i < len; i++) {
      if (b.substring(0, i) + b.substring(i + 1) === a) {
        return true;
      }
    }
    return false;
  }
};

console.log(
  longestStrChain([
    'ksqvsyq',
    'ks',
    'kss',
    'czvh',
    'zczpzvdhx',
    'zczpzvh',
    'zczpzvhx',
    'zcpzvh',
    'zczvh',
    'gr',
    'grukmj',
    'ksqvsq',
    'gruj',
    'kssq',
    'ksqsq',
    'grukkmj',
    'grukj',
    'zczpzfvdhx',
    'gru'
  ])
);
