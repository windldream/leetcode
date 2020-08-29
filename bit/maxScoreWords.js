/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const letterCount = Array(26).fill(0)
  for (const c of letters) {
    letterCount[c.charCodeAt() - 'a'.charCodeAt()] += 1
  }

  let ans = 0
  for (let i = 0; i < 1 << words.length; i++) {
    const g = group(words, i)
    ans = Math.max(ans, calcScore(g, letterCount, score))
  }
  return ans

  function group(words, bit) {
    const g = Array(26).fill(0)
    for (let i = 0; i < words.length; i++) {
      // 该word没有被选择
      if (!(bit & (1 << i))) continue
      for (const c of words[i]) {
        g[c.charCodeAt() - 'a'.charCodeAt()] += 1
      }
    }
    return g
  }

  function calcScore(group, letterCount, score) {
    let s = 0
    for (let j = 0; j < 26; j++) {
      if (letterCount[j] < group[j]) return 0
      s += group[j] * score[j]
    }
    return s
  }
}
