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
var numColor = function (root) {
  const ans = new Set()
  preOrder(root)

  return ans.size

  function preOrder(root) {
    if (root === null) return
    ans.add(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
}
