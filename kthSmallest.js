/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const iterator = helper(root);
  let res;
  for (let i = 0; i < k; i++) {
    res = iterator.next();
  }

  return res.value;

  function* helper(root) {
    if (root === null) {
      return;
    }
    yield* helper(root.left);
    yield root.val;
    yield* helper(root.right);
  }
};
