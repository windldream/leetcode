/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  const high = getMaxDepth(root);

  let width = 0,
    count = high;
  while (count--) {
    width = width * 2 + 1;
  }

  const res = Array(high)
    .fill(0)
    .map(() => Array(width).fill(''));
  helper(root, 1, 0, width);
  return res;

  function helper(root, depth, start, end) {
    if (root === null || start > end) {
      return;
    }
    const insert = Math.floor(start + (end - start) / 2);
    for (let i = start; i <= end; i++) {
      if (i === insert) {
        res[depth - 1][insert] = root.val + '';
      }
    }
    helper(root.left, depth + 1, start, insert - 1);
    helper(root.right, depth + 1, insert + 1, end);
  }

  function getMaxDepth(root) {
    if (root === null) {
      return 0;
    }
    return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
  }
};
