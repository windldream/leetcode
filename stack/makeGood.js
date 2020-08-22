/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = []
  let i = 0
  while (i < s.length) {
    if (stack.length) {
      const peek = stack[stack.length - 1]
      if (
        peek.toLowerCase() === s[i].toLowerCase() &&
        ((peek === peek.toLowerCase() && s[i] === s[i].toUpperCase()) ||
          (peek === peek.toUpperCase() && s[i] === s[i].toLowerCase()))
      ) {
        stack.pop()
      } else {
        stack.push(s[i])
      }
    } else {
      stack.push(s[i])
    }
    i++
  }

  return stack.join('')
}
