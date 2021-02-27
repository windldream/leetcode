/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.unshift(0)
  heights.push(0)
  const n = heights.length
  const stack = []
  let ans = 0
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const index = stack.pop()
      ans = Math.max(ans, (i - 1 - stack[stack.length - 1]) * heights[index])
    }
    stack.push(i)
  }
  return ans
}

largestRectangleArea([2, 1, 3, 4, 2, 3])
