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
var maximumAverageSubtree = function (root) {
  if (root === null) return 0
  let ans = -Infinity
  postorder(root)
  return ans

  function postorder(root) {
    if (root === null) return [0, 0]
    const l = postorder(root.left)
    const r = postorder(root.right)
    const count = l[0] + r[0] + 1
    const sum = l[1] + r[1] + root.val
    ans = Math.max(ans, sum / count)
    return [count, sum]
  }
}
