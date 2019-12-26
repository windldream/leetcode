/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  let m = s1.length,
    n = s2.length,
    letters = {};

  if (m !== n) {
    return false;
  }

  if (s1 === s2) {
    return true;
  }

  for (let i = 0; i < m; i++) {
    if (!letters[s1[i]]) {
      letters[s1[i]] = 1;
    } else {
      letters[s1[i]]++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (letters[s2[i]]) {
      letters[s2[i]]--;
    }
  }

  for (let key in letters) {
    if (letters[key]) {
      return false;
    }
  }

  // 递归
  // TODO 动态规划
  for (let i = 1; i < m; i++) {
    if (isScramble(s1.substring(0, i), s2.substring(0, i)) && isScramble(s1.substring(i), s2.substring(i))) {
      return true;
    }
    if (isScramble(s1.substring(i), s2.substring(0, n - i)) && isScramble(s1.substring(0, i), s2.substring(n - i))) {
      return true;
    }
  }

  return false;
}

console.log(isScramble('great', 'rgeat'))