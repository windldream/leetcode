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
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let high = 0;
  bfs(root, 0);
  return high + 1;

  function bfs(root, level) {
    high = Math.max(high, level);
    if (root.left) {
      bfs(root.left, level + 1);
    }
    if (root.right) {
      bfs(root.right, level + 1);
    }
  }
};
