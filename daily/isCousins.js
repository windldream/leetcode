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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    let hasX = false
    let hasY = false
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (hasX && hasY) return true
      let hasSameParent = hasX || hasY
      if (node.left) {
        queue.push(node.left)
        if (node.left.val === x) hasX = true
        if (node.left.val === y) hasY = true
      }
      if (node.right) {
        queue.push(node.right)
        if (node.right.val === x) hasX = true
        if (node.right.val === y) hasY = true
      }
      if (!hasSameParent && hasX && hasY) {
        hasX = false
        hasY = false
      }
    }
    if (hasX && hasY) return true
  }
  return false
}
