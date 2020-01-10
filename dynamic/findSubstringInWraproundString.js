/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  if (p.length < 2) {
    return p.length;
  }
  const len = p.length,
    c = [],
    dp = Array(26).fill(0);
  let res = 0,
    maxLen = 0;

  for (let i = 0; i < len; i++) {
    c[i] = p[i].charCodeAt() - 'a'.charCodeAt();
  }

  for (let i = 0; i < len; i++) {
    // 如果连续两个位置的字符串是连着的
    if (i > 0 && (c[i - 1] + 1) % 26 === c[i]) {
      maxLen++;
    } else {
      maxLen = 1;
    }
    dp[c[i]] = Math.max(dp[c[i]], maxLen);
  }

  for (let i = 0; i < 26; i++) {
    res += dp[i];
  }

  return res;
};

console.log(findSubstringInWraproundString('zab'));
