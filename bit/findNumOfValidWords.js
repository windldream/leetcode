/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  const len = words.length
  const bitMap = new Map()
  for (let i = 0; i < len; i++) {
    let k = 0
    for (const c of words[i]) {
      k |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
    if (!bitMap.has(k)) {
      bitMap.set(k, 0)
    }
    bitMap.set(k, bitMap.get(k) + 1)
  }

  const m = puzzles.length
  const res = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    let k = 0
    for (const c of puzzles[i]) {
      k |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
    for (let j = k; j; j = (j - 1) & k) {
      if ((1 << (puzzles[i][0].charCodeAt() - 'a'.charCodeAt())) & j) {
        res[i] += bitMap.get(j) || 0
      }
    }
  }
  return res
}
