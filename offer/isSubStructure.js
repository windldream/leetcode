/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A === null || B === null) return false
  return equal(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)

  function equal(A, B) {
    if (B === null) return true
    if (A === null) return false
    if (A.val !== B.val) return false
    return equal(A.left, B.left) && equal(A.right, B.right)
  }
}
