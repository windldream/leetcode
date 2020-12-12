/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
  if (root === null || nodes.includes(root)) return root
  const l = lowestCommonAncestor(root.left, nodes)
  const r = lowestCommonAncestor(root.right, nodes)
  if (l && r) return root
  if (l) return l
  if (r) return r
  return null
}
