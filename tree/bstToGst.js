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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let sum = 0
  inorder(root)
  return root

  function inorder(root) {
    if (root === null) return
    inorder(root.right)
    sum += root.val
    root.val = sum
    inorder(root.left)
  }
}
