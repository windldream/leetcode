/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const len = s.length;
  const hashMap = {};
  for (let i = 0; i < len; i++) {
    if (!hashMap[s[i]]) {
      hashMap[s[i]] = 0;
    }
    hashMap[s[i]] += 1;
  }

  for (let i = 0; i < len; i++) {
    if (hashMap[t[i]]) {
      hashMap[t[i]] -= 1;
    }
  }

  for (const key in hashMap) {
    if (hashMap[key] !== 0) {
      return false;
    }
  }

  return true;
};
