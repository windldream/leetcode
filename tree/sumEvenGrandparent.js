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
var sumEvenGrandparent = function(root) {
  let res = 0;
  preOrder(root, null, null);
  return res;

  function preOrder(root, parent, grandParent) {
    if (root === null) {
      return;
    }
    if (grandParent && grandParent.val % 2 === 0) {
      res += root.val;
    }
    preOrder(root.left, root, parent);
    preOrder(root.right, root, parent);
  }
};
