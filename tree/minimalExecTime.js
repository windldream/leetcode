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
var minimalExecTime = function (root) {
  return postorder(root, 2)[0]

  function postorder(root, n) {
    if (root === null) return [0, 0]
    const left = postorder(root.left, n)
    const right = postorder(root.right, n)
    const sum = left[1] + right[1]
    const min = Math.max(left[0], right[0], sum / n) + root.val
    return [min, sum + root.val]
  }
}
