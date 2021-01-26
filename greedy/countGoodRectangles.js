/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let maxLen = 0
  for (const [x, y] of rectangles) {
    maxLen = Math.max(maxLen, Math.min(x, y))
  }

  let ans = 0
  for (const [x, y] of rectangles) {
    if (x >= maxLen && y >= maxLen) ans++
  }
  return ans
}
