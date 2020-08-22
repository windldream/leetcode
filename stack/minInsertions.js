/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const stack = []
  let i = 0
  let count = 0

  while (i < s.length) {
    if (s[i] === '(') {
      stack.push('(')
    } else {
      if (stack.length) {
        if (stack[stack.length - 1] === '(') {
          if (s[i + 1] === ')') {
            stack.pop()
            i++
          } else {
            count++
            stack.pop()
          }
        } else {
          count++
          stack.pop()
        }
      } else {
        if (s[i + 1] === ')') {
          i++
          count++
        } else {
          count += 2
        }
      }
    }
    i++
  }

  return count + stack.length * 2
}

minInsertions(')))))))')
