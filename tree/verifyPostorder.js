/**
 * @param {number[]} postorder
 * @return {boolean}
 */
const verifyPostorder = function (postorder) {
  const len = postorder.length
  const stack = []
  let root = Infinity
  for (let i = len - 1; i >= 0; i--) {
    if (postorder[i] > root) return false
    while (stack.length && postorder[i] < stack[stack.length - 1]) {
      root = stack.pop()
    }
    stack.push(postorder[i])
  }
  return true
}

verifyPostorder([1, 6, 3, 2, 5])
