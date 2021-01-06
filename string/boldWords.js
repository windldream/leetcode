/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords = function(words, S) {
  const len = S.length
  const mask = Array(len).fill(false)
  for (let i = 0; i < len; i++) {
    const prefix = S.slice(i)
    for (const word of words) {
      if (prefix.startsWith(word)) {
        for (let j = i; j < i + word.length; j++) {
          mask[j] = true
        }
      }
    }
  }

  let ans = ''
  for (let i = 0; i < len; i++) {
    if (mask[i] && (i === 0 || !mask[i - 1])) ans += '<b>'
    ans += S[i]
    if (mask[i] && (i === len - 1 || !mask[i + 1])) ans += '</b>'
  }
  return ans
};