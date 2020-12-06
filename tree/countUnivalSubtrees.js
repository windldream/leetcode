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
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
  if (root === null) return 0
  let count = 0
  postorder(root)
  return count

  function postorder(root) {
    if (root === null) return true
    const l = postorder(root.left)
    const r = postorder(root.right)
    let cur = true
    if (root.left && root.val !== root.left.val) cur = false
    if (root.right && root.val !== root.right.val) cur = false
    if (cur && l && r) count++
    return cur && l && r
  }
}
