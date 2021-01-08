/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const wordsTyping = function(sentence, rows, cols) {
  const len = sentence.length
  const dp = Array(len).fill(0)
  const next = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    let count = 0
    let ptr = i
    let cur = cols
    while (cur >= sentence[ptr].length) {
      cur -= sentence[ptr].length
      ptr++
      if (ptr === sentence.length) {
        count++
        ptr = 0
      }
    }
    dp[i] = count
    next[i] = ptr
  }

  let count = 0
  let cur = 0
  for (let i = 0; i < rows; i++) {
    count += dp[cur]
    cur = next[cur]
  }
  return count
};