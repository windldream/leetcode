/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = []
  for (const s of S) {
    if (stack.length && stack[stack.length - 1] === s) {
      stack.pop()
    } else {
      stack.push(s)
    }
  }
  return stack.join('')
}
