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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const queue = []
  queue.push(root)
  let level = 0
  while (queue.length) {
    const len = queue.length
    let prev = null
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if ((level & 1) === 0) {
        if ((node.val & 1) === 0) return false
        if (prev) {
          if (node.val <= prev.val) return false
        }
      } else {
        if (node.val & 1) return false
        if (prev) {
          if (node.val >= prev.val) return false
        }
      }
      prev = node

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    level++
  }
  return true
}
