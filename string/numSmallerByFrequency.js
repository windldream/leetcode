/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const wordCount = []
  for (const word of words) {
    wordCount.push(frequency(word))
  }
  const ans = []
  for (const query of queries) {
    const count = frequency(query)
    ans.push(wordCount.filter((num) => count < num).length)
  }
  return ans

  function frequency(word) {
    const map = {}
    for (const c of word) {
      if (!map[c]) map[c] = 0
      map[c] += 1
    }
    return map[Object.keys(map).sort()[0]]
  }
}
