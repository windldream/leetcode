/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
  const len = sentence.length
  const dp = Array(len + 1).fill(len)
  dp[0] = 0
  for (let i = 1; i <= len; i++) {
    dp[i] = dp[i - 1] + 1
    for (const word of dictionary) {
      const length = word.length
      if (length <= i && word === sentence.substr(i - length, length)) {
        dp[i] = Math.min(dp[i], dp[i - length])
      }
    }
  }
  return dp[len]
}

respace(['looked', 'just', 'like', 'her', 'brother'], 'jesslookedjustliketimherbrother')
