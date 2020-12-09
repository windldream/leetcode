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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function (root, arr) {
  return helper(root, arr, !!root.left || !!root.right)

  function helper(node, arr, hasChild) {
    if (node === null) {
      return arr.length === 0 && !hasChild
    }
    if (node.val === arr[0]) {
      const newArr = arr.slice(1)
      if (helper(node.left, newArr, !!node.right) || helper(node.right, newArr, !!node.left)) return true
      return false
    }
    return false
  }
}
