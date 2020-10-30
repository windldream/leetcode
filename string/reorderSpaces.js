/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let totalEmpty = 0
  for (const c of text) {
    totalEmpty += c === ' '
  }
  const words = text.trim().split(/\s+/)
  const aver = Math.trunc(totalEmpty / (words.length - 1))
  const rest = totalEmpty % (words.length - 1)
  return words.length === 1 ? words[0] + ' '.repeat(totalEmpty) : words.join(' '.repeat(aver)) + ' '.repeat(rest)
}

reorderSpaces('  this   is  a sentence ')
