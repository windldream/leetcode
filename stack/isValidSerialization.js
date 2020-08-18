/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const arr = preorder.split(',')
  const stack = []

  for (const item of arr) {
    while (stack.length && stack[stack.length - 1] === '#' && item === '#') {
      stack.pop()
      if (stack.length === 0) return false
      stack.pop()
    }
    stack.push(item)
  }
  return stack.length === 1 && stack[0] === '#'
}
