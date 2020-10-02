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
  if (t1 === null && t2 === null) return true
  if (t1 === null || t2 === null) return false
  if (t1.val === t2.val) {
    const ans = check(t1, t2)
    if (ans) return true
  }
  return checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2)

  function check(t1, t2) {
    if (t1 === null && t2 === null) return true
    if (t1 === null || t2 === null) return false
    if (t1.val !== t2.val) return false
    return check(t1.left, t2.left) && check(t1.right, t2.right)
  }
}
