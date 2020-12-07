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
  let res = 0
  helper(root)
  return res

  function helper(root) {
    const arr = [1, 1]
    if (root === null) return arr
    const left = helper(root.left)
    const right = helper(root.right)
    if (root.left) {
      if (root.left.val - 1 === root.val) arr[1] = left[1] + 1
      if (root.left.val + 1 === root.val) arr[0] = left[0] + 1
    }
    if (root.right) {
      if (root.right.val - 1 === root.val) arr[1] = Math.max(arr[1], right[1] + 1)
      if (root.right.val + 1 === root.val) arr[0] = Math.max(arr[0], right[0] + 1)
    }

    res = Math.max(res, arr[1] + arr[0] - 1)
    return arr
  }
}
