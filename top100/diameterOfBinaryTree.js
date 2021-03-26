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
var diameterOfBinaryTree = function (root) {
  let ans = 0
  postorder(root)
  return ans

  function postorder(root) {
    if (root === null) return 0
    const l = postorder(root.left)
    const r = postorder(root.right)
    ans = Math.max(ans, l + r)
    return Math.max(l, r) + 1
  }
}
