/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let ans = 0
  let diff = Infinity
  inorder(root)
  return ans

  function inorder(root) {
    if (root === null) return
    if (Math.abs(root.val - target) < diff) {
      diff = Math.abs(root.val - target)
      ans = root.val
    }
    if (root.val > target) {
      inorder(root.left)
    } else {
      inorder(root.right)
    }
  }
}
