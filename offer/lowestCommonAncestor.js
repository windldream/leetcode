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
  if (root === p || root === q) return root
  // 两个节点分散在根节点的左右两边
  if ((root.val > p.val && root.val < q.val) || (root.val > q.val && root.val < p.val)) return root
  // 在根节点的左边
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
}
