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
var convertBST = function (root) {
  let sum = 0
  postorder(root)
  return root

  function postorder(root) {
    if (root === null) return sum
    postorder(root.right)
    sum += root.val
    root.val = sum
    postorder(root.left)
  }
}
