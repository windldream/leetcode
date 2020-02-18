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
var widthOfBinaryTree = function(root) {
  const queue = [[root, 0, 0]],
    M = 10 ** 9 + 7;
  let curDepth = 0,
    left = 0,
    res = 0;
  while (queue.length) {
    let a = queue.shift();
    if (a[0] !== null) {
      queue.push([a[0].left, a[1] + 1, (a[2] * 2) % M]);
      queue.push([a[0].right, a[1] + 1, (a[2] * 2 + 1) % M]);
      if (curDepth !== a[1]) {
        curDepth = a[1];
        left = a[2];
      }
      res = Math.max(res, a[2] - left + 1);
    }
  }

  return res;
};
