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
var longestConsecutive = function (root) {
  if (root === null) return 0
  let ans = 0
  preorder(root, null, 0)
  return ans

  function preorder(root, parent, prev) {
    if (root === null) return
    let cur = prev
    if (parent === null || root.val === parent.val + 1) {
      cur++
      ans = Math.max(ans, cur)
    }
    preorder(root.left, root, cur - prev === 1 ? cur : 1)
    preorder(root.right, root, cur - prev === 1 ? cur : 1)
  }
}
