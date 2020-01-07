/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sLen = s.length,
    lastIndex = -1;
  for (let i = 0; i < sLen; i++) {
    lastIndex = t.indexOf(s[i], lastIndex + 1);
    if (lastIndex > -1) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isSubsequence('axc', 'ahbgdc'))