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
var maxProduct = function(root) {
  const sums = [];
  postOrder(root);
  let res = 0,
    len = sums.length;
  for (let i = 0; i < len; i++) {
    res = Math.max(res, sums[i] * (sums[len - 1] - sums[i]));
  }
  return res;

  function postOrder(root) {
    if (root === null) {
      return 0;
    }
    let res = 0;
    res = root.val + postOrder(root.left) + postOrder(root.right);
    sums.push(res);
    return res;
  }
};
