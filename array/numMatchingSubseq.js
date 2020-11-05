/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (S, words) {
  const ans = []
  outer: for (const word of words) {
    let start = 0
    for (const c of word) {
      const index = S.indexOf(c, start)
      if (index === -1) continue outer
      start = index + 1
    }
    ans.push(word)
  }
  return ans.length
}
