/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2) {
  if (isEqual(t1, t2)) return true
  if (t1 && checkSubTree(t1.left, t2)) return true
  if (t1 && checkSubTree(t1.right, t2)) return true
  return false

  function isEqual(t1, t2) {
    if (t1 === null && t2 === null) return true
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right)
  }
}
