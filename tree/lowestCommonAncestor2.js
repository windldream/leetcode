/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const ans = postorder(root, p, q)
  return ans[2]

  function postorder(root, p, q) {
    if (root === null) return [false, false, null]
    const l = postorder(root.left, p, q)
    const r = postorder(root.right, p, q)
    if (l[0] && l[1]) return l
    if (r[0] && r[1]) return r
    const isContainP = l[0] || r[0]
    const isContainQ = l[1] || r[1]
    if (isContainP && isContainQ) return [isContainP, isContainQ, root]
    if (root === p) {
      return [true, isContainQ, isContainQ ? root : null]
    }
    if (root === q) {
      return [isContainP, true, isContainP ? root : null]
    }
    return [isContainP, isContainQ, null]
  }
}
