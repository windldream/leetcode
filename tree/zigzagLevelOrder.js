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
var zigzagLevelOrder = function(root) {
  const res = [];
  if (root === null) {
    return res;
  }
  bfs(root, 0);
  return res;

  function bfs(root, level) {
    if (res.length === level) {
      res.push([]);
    }

    if (level % 2) {
      res[level].unshift(root.val);
    } else {
      res[level].push(root.val);
    }

    if (root.left) {
      bfs(root.left, level + 1);
    }
    if (root.right) {
      bfs(root.right, level + 1);
    }
  }
};
