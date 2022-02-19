/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []
  const n = temperatures.length
  const ans = Array(n).fill(0)

  // 单调递减栈
  for (let i = 0; i < n; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const idx = stack.pop()
      ans[idx] = i - idx
    }

    stack.push(i)
  }

  return ans
}
