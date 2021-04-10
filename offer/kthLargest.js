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
var kthLargest = function (root, k) {
  let idx = 0
  let num = -1
  postorder(root, 0)
  return num

  function postorder(root) {
    if (root === null) return
    postorder(root.right)
    idx++
    if (idx === k) {
      num = root.val
      return
    }
    postorder(root.left)
  }
}
