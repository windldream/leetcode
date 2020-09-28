/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const words = text.split(' ').map((word) => word.toLowerCase())
  words.sort((a, b) => a.length - b.length)
  return words.join(' ').replace(/^\S/, (s) => s.toUpperCase())
}
