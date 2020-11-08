/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const len = heights.length
  const target = heights.slice().sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < len; i++) {
    ans += target[i] !== heights[i]
  }
  return ans
}
