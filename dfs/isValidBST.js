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
  let ans = true
  inorder(root, stack)
  return ans

  function inorder(root, stack) {
    if (root === null) return
    inorder(root.left, stack)
    if (stack.length && stack[stack.length - 1] >= root.val) {
      ans = false
      return
    }
    stack.push(root.val)
    inorder(root.right, stack)
  }
}
