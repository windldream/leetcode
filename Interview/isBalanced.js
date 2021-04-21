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
var isBalanced = function (root) {
  if (root === null) return true
  let ans = true
  postorder(root)
  return ans

  function postorder(root) {
    if (root === null) return 0
    const left = postorder(root.left)
    const right = postorder(root.right)
    if (Math.abs(left - right) > 1) {
      ans = false
      return
    }
    return Math.max(left, right) + 1
  }
}
