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
var levelOrder = function(root) {
  const res = [];
  const queue = [];
  if (root === null) {
    return res;
  }
  queue.push(root);

  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const node = queue.shift();
      res.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return res;
};
