/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
const numKLenSubstrNoRepeats = function(S, K) {
  if (K > S.length) return 0
  let str = []
  let r = 0
  let ans = 0
  while (r < S.length) {
    str.push(S[r])
    while (str.indexOf(S[r]) !== str.length - 1) {
      str.shift()
    }
    if (str.length >= K) ans++
    r++
  }

  return ans
};