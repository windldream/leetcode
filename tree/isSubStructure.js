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
  let ans = false
  dfs(A, B)
  return ans

  function dfs(root, B) {
    if (root === null) return
    if (root.val === B.val) {
      if (B.left !== null && B.right !== null) {
        ans = isEqual(root, B)
      } else if (B.left !== null) {
        ans = isEqual(root.left, B.left)
      } else if (B.right !== null) {
        ans = isEqual(root.right, B.right)
      } else {
        ans = true
      }
      if (ans) return
    }
    dfs(root.left, B)
    dfs(root.right, B)
  }

  function isEqual(a, b) {
    if (b === null) return true
    if (a === null) return false
    if (a.val !== b.val) return false
    return isEqual(a.left, b.left) && isEqual(a.right, b.right)
  }
}
