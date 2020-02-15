/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const res = [];
  if (root === null) {
    return res;
  }
  bfs(root, 0);
  return res.reverse();

  function bfs(root, level) {
    if (res.length === level) {
      res.push([]);
    }

    res[level].push(root.val);

    if (root.left) {
      bfs(root.left, level + 1);
    }

    if (root.right) {
      bfs(root.right, level + 1);
    }
  }
};
