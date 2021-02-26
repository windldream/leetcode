/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
  const bitMap = new Map()
  for (const word of words) {
    let mask = 0
    for (const c of word) {
      mask = mask | (1 << (c.charCodeAt() - 'a'.charCodeAt()))
    }
    bitMap.set(mask, (bitMap.get(mask) || 0) + 1)
  }

  const ans = []
  for (const puzzle of puzzles) {
    let k = 0
    for (const c of puzzle) {
      k = k | (1 << (c.charCodeAt() - 'a'.charCodeAt()))
    }
    // 遍历k的子集, 匹配words中的单词word
    let count = 0
    for (let j = k; j; j = (j - 1) & k) {
      const index = puzzle[0].charCodeAt() - 'a'.charCodeAt()
      if ((1 << index) & j && bitMap.has(j)) {
        count += bitMap.get(j)
      }
    }
    ans.push(count)
  }
  return ans
}

// 1110 bcd
// 1101
// 1100 cd
// 1011
// 1110
// 1010 bd
// 1001
// 1110
// 1000 d
// 0111
// 1110
// 0110 bc
// 0101
// 1110
// 0100 c
// 0011
// 1110
// 0010 b
// 0001
// 1000
// 0000

// b, c, d, bc, bd, cd, bcd
