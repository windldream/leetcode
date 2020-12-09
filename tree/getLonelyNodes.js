/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  const ans = []
  if (root === null) return ans
  preorder(root)
  return ans

  function preorder(node) {
    if (node === null) return
    if (node.left === null && node.right) {
      ans.push(node.right.val)
    }
    if (node.right === null && node.left) {
      ans.push(node.left.val)
    }
    preorder(node.left)
    preorder(node.right)
  }
}
