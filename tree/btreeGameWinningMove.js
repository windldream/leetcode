/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  let left = 0,
    right = 0;
  getNum(root, x);
  return n / 2 < Math.max(left, right, n - left - right - 1);

  function getNum(root, x) {
    if (root === null) {
      return 0;
    }
    const l = getNum(root.left, x);
    const r = getNum(root.right, x);
    if (root.val === x) {
      left = l;
      right = r;
    }
    return l + r + 1;
  }
};
