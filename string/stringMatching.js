/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const ans = []
  const len = words.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (words[j].includes(words[i])) {
        ans.push(words[i])
        break
      }
    }
  }
  return ans
}

stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am'])
