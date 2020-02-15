/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];
  if (root === null) {
    return res;
  }
  bfs(root, 0);
  return res;

  function bfs(root, level) {
    res[level] = root.val;
    if (root.left) {
      bfs(root.left, level + 1);
    }
    if (root.right) {
      bfs(root.right, level + 1);
    }
  }
};
