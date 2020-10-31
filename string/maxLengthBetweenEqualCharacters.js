/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let ans = -1
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(i + 'a'.charCodeAt())
    const start = s.indexOf(c)
    const end = s.lastIndexOf(c)
    if (start !== -1 && end !== -1 && start !== end) {
      ans = Math.max(ans, end - start - 1)
    }
  }
  return ans
}
