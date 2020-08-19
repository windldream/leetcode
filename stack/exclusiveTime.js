/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const res = Array(n).fill(0)
  const stack = []
  let s = logs[0].split(':')
  stack.push(+s[0])
  let i = 1,
    prev = +s[2]

  while (i < logs.length) {
    s = logs[i].split(':')
    if (s[1] === 'start') {
      if (stack.length) {
        res[stack[stack.length - 1]] += +s[2] - prev
      }
      stack.push(+s[0])
      prev = +s[2]
    } else {
      res[stack[stack.length - 1]] += +s[2] - prev + 1
      stack.pop()
      prev = +s[2] + 1
    }
    i++
  }

  return res
}
