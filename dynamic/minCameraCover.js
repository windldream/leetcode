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
var minCameraCover = function(root) {
  const head = new TreeNode(0);
  let count = 0;
  head.left = root;
  helper(head);
  return count;

  function helper(root) {
    if (root === null) {
      return 0;
    }
    const l = helper(root.left);
    const r = helper(root.right);
    if (l + r === 0) {
      return 1;
    } else if (l === 1 || r === 1) {
      count++;
      // 处于已监控的状态
      return 2;
    } else {
      // 和 root 等于 null 类似
      return 0;
    }
  }
};
