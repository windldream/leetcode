/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const map = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]

  const wordSet = new Set()
  for (const word of words) {
    let key = ''
    for (const c of word) {
      key += map[c.charCodeAt() - 'a'.charCodeAt()]
    }
    wordSet.add(key)
  }
  return wordSet.size
}
