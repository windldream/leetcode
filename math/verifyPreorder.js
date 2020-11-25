/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  const stack = []
  let prev = -Infinity
  for (let i = 0, len = preorder.length; i < len; i++) {
    if (preorder[i] < prev) return false
    // 获取父节点
    while (stack.length && preorder[i] > stack[stack.length - 1]) {
      prev = stack.pop()
    }
    stack.push(preorder[i])
  }
  return true
}

verifyPreorder([5, 2, 6, 1, 3])
