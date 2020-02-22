/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
  if (root === null) {
    return true;
  }

  const stack = [];
  stack.push(root);
  let flag = false;
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (node === null) {
        flag = true;
        continue;
      }
      if (flag) {
        return false;
      }
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return true;
};
