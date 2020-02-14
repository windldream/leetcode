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
  const res = [];
  if (root === null) {
    return res;
  }

  let level = 0;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    res.push([]);
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      res[level].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    level += 1;
  }

  return res;
};
