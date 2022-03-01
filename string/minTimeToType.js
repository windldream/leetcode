/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  const baseCode = 'a'.charCodeAt()
  let count = 0
  let cur = 0

  for (const ch of word) {
    const idx = ch.charCodeAt() - baseCode

    if (cur !== idx) {
      count += Math.min(Math.abs(cur - idx), 26 - Math.abs(cur - idx))
    }

    count++
    cur = idx
  }

  return count
}
