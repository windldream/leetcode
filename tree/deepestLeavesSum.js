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
var deepestLeavesSum = function(root) {
  if (root === null) {
    return 0;
  }
  const stack = [];
  let sum = 0;

  stack.push(root);
  while (stack.length) {
    const len = stack.length;
    sum = 0;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      sum += node.val;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return sum;
};
