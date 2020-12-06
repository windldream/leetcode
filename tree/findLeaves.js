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
 * @return {number[][]}
 */
var findLeaves = function (root) {
  const ans = []
  postorder(root)
  return ans

  function postorder(root) {
    if (root === null) return 0
    const l = postorder(root.left)
    const r = postorder(root.right)
    const h = Math.max(l, r)
    if (ans.length === h) {
      ans.push([])
    }
    ans[h].push(root.val)
    return h + 1
  }
}
