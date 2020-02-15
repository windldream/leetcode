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
var postorderTraversal = function(root) {
  const white = 0,
    gray = 1,
    res = [],
    stack = [
      {
        color: white,
        node: root
      }
    ];

  while (stack.length) {
    const { color, node } = stack.pop();
    if (node === null) {
      continue;
    }
    if (color === white) {
      stack.push({
        color: gray,
        node: node
      });
      stack.push({
        color: white,
        node: node.right
      });
      stack.push({
        color: white,
        node: node.left
      });
    } else {
      res.push(node.val);
    }
  }

  return res;
};
