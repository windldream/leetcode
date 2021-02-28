/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let stack = []
  const ans = []
  stack.push(root)
  while (stack.length) {
    const len = stack.length
    const temp = []
    const list = []
    for (let i = 0; i < len; i++) {
      const node = stack[i]
      if (node === null) {
        continue
      }
      list.push(node.val)
      temp.push(node.left)
      temp.push(node.right)
    }
    if (list.length) ans.push(list)
    stack = temp
  }
  return ans
}
