/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
  return postOrder(root, target);

  function postOrder(root, target) {
    if (root === null) {
      return null;
    }
    root.left = postOrder(root.left, target);
    root.right = postOrder(root.right, target);
    if (root.val === target && root.left === null && root.right === null) {
      root = null;
    }
    return root;
  }
};
