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
var largestBSTSubtree = function (root) {
  if (root === null) return 0
  let ans = 0
  postorder(root)
  return ans

  function postorder(root) {
    if (root === null) return [true, 0, -Infinity, Infinity]
    const l = postorder(root.left)
    const r = postorder(root.right)
    let cur = true
    let count = 0
    if ((root.left && root.val <= root.left.val) || root.val <= l[2]) cur = false
    if ((root.right && root.val >= root.right.val) || root.val >= r[3]) cur = false
    const flag = cur && l[0] && r[0]
    if (flag) {
      count++
      ans = Math.max(ans, count + l[1] + r[1])
    }
    return [flag, flag ? count + l[1] + r[1] : count, Math.max(root.val, l[2], r[2]), Math.min(root.val, r[3], l[3])]
  }
}
