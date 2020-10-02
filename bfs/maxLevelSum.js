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
var maxLevelSum = function (root) {
  let max = -Infinity
  let ans = -1
  let i = 1
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    let sum = 0
    while (len > 0) {
      const node = queue.shift()
      sum += node.val
      len--
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    if (sum > max) {
      max = sum
      ans = i
    }
    i++
  }
  return ans
}
