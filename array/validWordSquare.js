/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  const n = words.length
  let m = 0
  for (let i = 0; i < n; i++) {
    m = Math.max(m, words[i].length)
  }
  const colWords = []
  for (let i = 0; i < m; i++) {
    let str = ''
    for (let j = 0; j < n; j++) {
      str += words[j][i] || ''
    }
    colWords[i] = str
  }

  for (let k = 0; k < n; k++) {
    if (words[k] !== colWords[k]) return false
  }
  return true
}
