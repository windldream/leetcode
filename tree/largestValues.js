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
var largestValues = function(root) {
  const res = [];
  bfs(root, 0);
  return res.map(nodes => Math.max.apply(null, nodes));

  function bfs(root, level) {
    if (root === null) {
      return;
    }
    if (res.length === level) {
      res.push([]);
    }
    res[level].push(root.val);
    bfs(root.left, level + 1);
    bfs(root.right, level + 1);
  }
};
