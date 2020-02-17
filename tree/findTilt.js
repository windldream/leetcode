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
var findTilt = function(root) {
  let sum = 0;
  postorder(root);
  return sum;

  function postorder(root) {
    if (root === null) {
      return 0;
    }
    const l = postorder(root.left);
    const r = postorder(root.right);
    sum += Math.abs(l - r);
    return root.val + l + r;
  }
};
