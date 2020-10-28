/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let ans = 0
  let a = 0
  let b = 0
  let c = 0
  let l = 0
  let r = 0
  const len = s.length
  while (r < len) {
    if (s[r] === 'a') {
      a++
    } else if (s[r] === 'b') {
      b++
    } else {
      c++
    }
    while (a >= 1 && b >= 1 && c >= 1) {
      ans += len - r
      if (s[l] === 'a') {
        a--
      } else if (s[l] === 'b') {
        b--
      } else {
        c--
      }
      l++
    }
    r++
  }
  return ans
}

numberOfSubstrings('abcabc')
