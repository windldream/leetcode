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
  if (root === null) return null
  // 因为p和q均存在于给定的二叉树中，所以如果根节点是 p 或者 q的话那就是最近公共祖先
  if (root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // p和q分散在左右两个子树
  if (left && right) {
    return root
    // 只存在于左子树
  } else if (left) {
    return left
    // 只存在于右子树
  } else if (right) {
    return right
  }
  return null
}
