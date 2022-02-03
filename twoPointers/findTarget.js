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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const list = []
  inorder(root)

  let l = 0
  let r = list.length - 1
  while (l < r) {
    const sum = list[l] + list[r]
    if (sum === k) return true
    else if (sum < k) l++
    else r--
  }

  return false

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    list.push(root.val)
    inorder(root.right)
  }
}
