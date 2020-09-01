/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const len = s.length
  const left = Array(len).fill(0)
  const right = Array(len).fill(0)

  const prev = Array(26).fill(-1)
  for (let i = 0; i < len; i++) {
    left[i] = prev[s[i].charCodeAt() - 'A'.charCodeAt()]
    prev[s[i].charCodeAt() - 'A'.charCodeAt()] = i
  }

  for (let i = 0; i < 26; i++) {
    prev[i] = len
  }

  for (let i = len - 1; i >= 0; i--) {
    right[i] = prev[s[i].charCodeAt() - 'A'.charCodeAt()]
    prev[s[i].charCodeAt() - 'A'.charCodeAt()] = i
  }

  let ans = 0
  for (let i = 0; i < len; i++) {
    ans = (ans + (i - left[i]) * (right[i] - i)) % (10 ** 9 + 7)
  }
  return ans
}

uniqueLetterString('LEETCODE')
