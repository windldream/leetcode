/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const stack = []
  for (const num of arr) {
    if (stack.length && num < stack[stack.length - 1]) {
      const head = stack.pop()
      while (stack.length && num < stack[stack.length - 1]) {
        stack.pop()
      }
      stack.push(head)
    } else {
      stack.push(num)
    }
  }
  return stack.length
}
