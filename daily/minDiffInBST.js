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
 * @return {number}
 */
var minDiffInBST = function (root) {
  let ans = Infinity
  let prev = null
  inorder(root)
  return ans

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    if (prev === null) {
      prev = root.val
    } else {
      ans = Math.min(ans, root.val - prev)
      prev = root.val
    }
    inorder(root.right)
  }
}
