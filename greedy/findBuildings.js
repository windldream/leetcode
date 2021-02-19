/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  const stack = []
  const n = heights.length
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] <= heights[i]) {
      stack.pop()
    }
    stack.push(i)
  }
  return stack
}
