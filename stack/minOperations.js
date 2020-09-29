/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = []
  for (const log of logs) {
    if (log[0] !== '.') {
      stack.push(log)
    } else {
      if (log[1] === '.') {
        if (stack.length === 0) continue
        stack.pop()
      }
    }
  }
  return stack.length
}

minOperations(['d1/', 'd2/', '../', 'd21/', './'])
