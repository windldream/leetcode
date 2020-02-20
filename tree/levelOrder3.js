/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  const res = [],
    stack = [];

  stack.push(root);
  while (stack.length) {
    const len = stack.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      arr.push(node.val);
      if (node.children) {
        stack.push(...node.children);
      }
    }
    res.push(arr);
  }
  return res;
};
