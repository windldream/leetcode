/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  return dfs(cloned, target)

  function dfs(node, target) {
    if (node === null) return null
    if (node.val === target.val) return node
    const left = dfs(node.left, target)
    if (left !== null) return left
    const right = dfs(node.right, target)
    if (right !== null) return right
    return null
  }
}
