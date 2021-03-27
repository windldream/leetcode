/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const stack = []
  const n = T.length
  const ans = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const index = stack.pop()
      ans[index] = i - index
    }
    stack.push(i)
  }
  return ans
}
