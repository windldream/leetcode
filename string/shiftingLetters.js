/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (S, shifts) {
  const len = shifts.length
  const prefixSum = Array(len + 1).fill(0)
  for (let i = len - 1; i >= 0; i--) {
    prefixSum[i] = prefixSum[i + 1] + shifts[i]
  }

  let ans = ''
  for (let i = 0; i < len; i++) {
    const code = ((prefixSum[i] + S[i].charCodeAt() - 'a'.charCodeAt()) % 26) + 'a'.charCodeAt()
    ans += String.fromCharCode(code)
  }
  return ans
}

shiftingLetters('ruu', [26, 9, 17])
