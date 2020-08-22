/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const arr = hours.map((hour) => (hour > 8 ? 1 : -1))
  const prefixSum = Array(hours.length).fill(0)
  for (let i = 1; i <= arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
  }

  const stack = []
  for (let i = 0; i < prefixSum.length; i++) {
    if (stack.length === 0 || prefixSum[stack[stack.length - 1]] > prefixSum[i]) {
      stack.push(i)
    }
  }

  let res = 0
  let i = hours.length
  while (i > res) {
    while (stack.length && prefixSum[stack[stack.length - 1]] < prefixSum[i]) {
      res = Math.max(res, i - stack[stack.length - 1])
      stack.pop()
    }
    i--
  }
  return res
}
