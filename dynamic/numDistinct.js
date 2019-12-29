/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  const len1 = s.length, len2 = t.length;
  let res = 0;

  if (len1 < len2) {
    return 0;
  }

  if (len1 === len2) {
    return s === t ? 1 : 0;
  }

  for (let i = 0; i <= len1 - len2; i++) {
    if (s[i] === t[0]) {
      res += numDistinct(s.substring(i + 1), t.substring(1))
    }
  }

  return res;
};

console.log(numDistinct('babgbag', 'bag'))