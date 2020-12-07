/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  const len = s.length
  if (len === 0) return null
  const stack = []
  const reg = /\d/
  for (let i = 0; i < len; i++) {
    if (s[i] === ')') {
      stack.pop()
    } else if (reg.test(s[i]) || s[i] === '-') {
      let j = i
      while (reg.test(s[i]) || s[i] === '-') i++
      const node = new TreeNode(+s.substring(j, i))
      i--
      if (stack.length) {
        const parent = stack[stack.length - 1]
        if (parent.left === null) parent.left = node
        else parent.right = node
      }
      stack.push(node)
    }
  }
  if (stack.length === 0) return null
  return stack[stack.length - 1]
}
