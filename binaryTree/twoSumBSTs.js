/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
const twoSumBSTs = function(root1, root2, target) {
  if (root1 === null || root2 === null) return false
  const val = target - root1.val
  if (inorder(root2, val)) return true
  return twoSumBSTs(root1.left, root2, target) || twoSumBSTs(root1.right, root2, target)

  function inorder(root, target) {
    if (root === null) return false
    if (root.val === target) return true
    if (root.val < target) {
      return inorder(root.right, target)
    }
    return inorder(root.left, target)
  }
};