/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch)

  if (index === -1) return word

  return (
    word
      .substring(0, index + 1)
      .split('')
      .reverse()
      .join('') + word.substring(index + 1)
  )
}
