/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = []
  let i = 0
  let j = 0
  const len = pushed.length
  while (i < len || j < len) {
    if (i === len && stack[stack.length - 1] !== popped[j]) return false
    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop()
      j++
    }
    if (i < len) {
      stack.push(pushed[i++])
    }
  }

  return stack.length === 0
}

validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])
