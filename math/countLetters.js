/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
  const len = S.length
  if (len === 1) return 1
  let i = 0
  let ans = 0
  while (i < len) {
    let j = i + 1
    while (S[j - 1] === S[j]) j++
    const n = j - i
    ans += (1 + n) * n / 2
    i = j
  }
  return ans
};