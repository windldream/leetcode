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
var averageOfLevels = function(root) {
  const res = [],
    stack = [];
  if (root === null) {
    return res;
  }
  stack.push(root);

  while (stack.length) {
    let len = stack.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      sum += node.val;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(sum / len);
  }
  return res;
};
