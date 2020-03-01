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
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if (root === null) {
    return null;
  }
  if (root.val <= p.val) {
    return inorderSuccessor(root.right, p);
  } else {
    const left = inorderSuccessor(root.left, p);
    if (!left) {
      return root;
    }
    return left;
  }
};
