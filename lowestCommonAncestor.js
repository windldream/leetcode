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
var lowestCommonAncestor = function(root, p, q) {
  let res = null;
  helper(root);
  return res;

  function helper(root) {
    if (root === null) {
      return;
    }
    if ((root.val - p.val) * (root.val - q.val) <= 0) {
      res = root;
    } else if (root.val < p.val && root.val < q.val) {
      helper(root.right);
    } else {
      helper(root.left);
    }
  }
};
