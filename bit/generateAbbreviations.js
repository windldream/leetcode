/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function (word) {
  const ans = []
  backtrack(ans, '', 0, 0)
  return ans

  function backtrack(ans, str, i, k) {
    if (i === word.length) {
      if (k !== 0) str += k
      ans.push(str)
    } else {
      backtrack(ans, str, i + 1, k + 1)
      if (k !== 0) str += k
      str += word[i]
      backtrack(ans, str, i + 1, 0)
    }
  }
}

generateAbbreviations('word')
