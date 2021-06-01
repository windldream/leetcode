/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  return convertToNum(firstWord) + convertToNum(secondWord) === convertToNum(targetWord)

  function convertToNum(str) {
    let num = ''
    for (const c of str) {
      num += c.charCodeAt() - 'a'.charCodeAt(``)
    }
    return +num
  }
}
