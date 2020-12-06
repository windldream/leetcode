/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
  if (root === null) return 0
  let ans = 0
  preorder(root, null, 0)
  return ans

  function preorder(root, parent, prev) {
    if (root === null) return
    let continuous = false
    if (parent === null || root.val === parent.val + 1) {
      prev++
      continuous = true
      ans = Math.max(ans, prev)
    }
    prev = continuous ? prev : 1
    preorder(root.left, root, prev)
    preorder(root.right, root, prev)
  }
}
