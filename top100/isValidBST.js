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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const stack = []
  const list = []
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if (list.length && list[list.length - 1] >= root.val) return false
      list.push(root.val)
      root = root.right
    }
  }
  return true
}
