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
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  const queue = [];
  queue.push(root);

  const res = [];
  let level = 0;
  while (queue.length) {
    res[level] = [];
    for (let len = queue.length - 1; len >= 0; len--) {
      const node = queue.shift();
      res[level].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return res;
};
