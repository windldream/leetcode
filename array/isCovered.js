/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    if (
      !ranges.some(([start, end]) => {
        for (let j = start; j <= end; j++) {
          if (j === i) return true
        }
        return false
      })
    ) {
      return false
    }
  }
  return true
}
