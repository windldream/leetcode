/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const len = bits.length
  let i = 0
  while (i < len) {
    if (i === len - 1) return true
    if (bits[i] === 1) {
      i++
    }
    i++
  }
  return false
}
