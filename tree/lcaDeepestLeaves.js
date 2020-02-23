/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  if (root === null) {
    return root;
  }

  const l = getDepth(root.left);
  const r = getDepth(root.right);
  if (l === r) {
    return root;
  } else if (l < r) {
    return lcaDeepestLeaves(root.right);
  } else {
    return lcaDeepestLeaves(root.left);
  }

  function getDepth(root) {
    if (root === null) {
      return 0;
    }
    return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
  }
};
