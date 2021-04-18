/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(i + 'a'.charCodeAt())
    if (!sentence.includes(c)) return false
  }
  return true
}
