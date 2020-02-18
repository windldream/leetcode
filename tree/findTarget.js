/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let res = [];
  inorder(root, k);
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i] + res[j] === k) {
        return true;
      }
    }
  }
  return false;

  function inorder(root, k) {
    if (root === null) {
      return;
    }
    inorder(root.left, k);
    res.push(root.val);
    inorder(root.right);
  }
};
