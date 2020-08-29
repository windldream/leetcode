/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  const len = words.length
  const bitMap = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    for (const c of words[i]) {
      bitMap[i] |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
  }

  const m = puzzles.length
  const map = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    for (const c of puzzles[i]) {
      map[i] |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
  }

  const res = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    let count = 0
    for (let j = 0; j < len; j++) {
      if (words[j].includes(puzzles[i][0]) && (bitMap[j] & map[i]) === bitMap[j]) {
        count++
      }
    }
    res[i] = count
  }
  return res
}
