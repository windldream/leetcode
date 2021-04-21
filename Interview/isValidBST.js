/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity
  let ans = true
  inorder(root)
  return ans

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    if (prev >= root.val) {
      ans = false
      return
    }
    prev = root.val
    inorder(root.right)
  }
}
