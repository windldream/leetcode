/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const len = word.length
  if (len === 0) return true
  const reg = /[A-Z]/
  if (reg.test(word[0])) {
    return word.toUpperCase() === word || word.substring(1).toLowerCase() === word.substring(1)
  }
  return word.toLowerCase() === word
}
