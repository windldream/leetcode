/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let leftBrackets = 0
  let count = 0

  for (const ch of s) {
    if (ch === '[') {
      leftBrackets++
    } else if (leftBrackets > 0) {
      leftBrackets--
    } else {
      leftBrackets++
      count++
    }
  }

  return count
}
