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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let ans = 0
  inorder(root)
  return ans

  function inorder(root) {
    if (root === null) return
    if (root.val >= low) inorder(root.left)
    if (root.val >= low && root.val <= high) ans += root.val
    if (root.val <= high) inorder(root.right)
  }
}
