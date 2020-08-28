/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const len = words.length
  const hash = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    for (const c of words[i]) {
      hash[i] |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }
  }

  let max = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((hash[i] & hash[j]) === 0) {
        max = Math.max(words[i].length * words[j].length, max)
      }
    }
  }
  return max
}
