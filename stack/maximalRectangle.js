/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0

  const m = matrix.length
  const n = matrix[0].length
  const height = Array(n + 2).fill(0)
  let ans = 0

  for (let i = 0; i < m; i++) {
    const stack = []

    for (let j = 0; j <= n + 1; j++) {
      if (j >= 1 && j <= n) {
        if (matrix[i][j - 1] === '1') {
          height[j] += 1
        } else {
          height[j] = 0
        }
      }

      while (stack.length && height[stack[stack.length - 1]] > height[j]) {
        const idx = stack.pop()
        ans = Math.max(ans, (j - 1 - stack[stack.length - 1]) * height[idx])
      }

      stack.push(j)
    }
  }

  return ans
}
