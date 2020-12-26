/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function(text, words) {
  const ans = []
  for (const word of words) {
    let i = 0
    while (text.indexOf(word, i) > -1) {
      const index = text.indexOf(word, i)
      ans.push([index, index + word.length - 1])
      i = index + 1
    }
  }

  return ans.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
};