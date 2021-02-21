/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0
  let ans = ''
  while (i < word1.length && i < word2.length) {
    ans += word1[i] + word2[i]
    i++
  }
  if (word1.length >= i) {
    ans += word1.substring(i)
  }
  if (word2.length >= i) {
    ans += word2.substring(i)
  }
  return ans
}
