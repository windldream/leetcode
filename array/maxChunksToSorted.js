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

maxChunksToSorted([1, 1, 2, 1, 1, 3, 4, 5, 1, 6])
