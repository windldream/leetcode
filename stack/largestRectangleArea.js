/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // 哨兵
  heights.unshift(0)
  heights.push(0)

  const stack = []
  const n = heights.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const idx = stack.pop()
      ans = Math.max(ans, heights[idx] * (i - 1 - stack[stack.length - 1]))
    }

    stack.push(i)
  }

  return ans
}
