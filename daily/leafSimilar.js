/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const queue1 = []
  getLeftNode(root1, queue1)
  const queue2 = []
  getLeftNode(root2, queue2)
  if (queue1.length !== queue2.length) return false
  for (let i = 0; i < queue1.length; i++) {
    if (queue1[i] !== queue2[i]) return false
  }
  return true

  function getLeftNode(root, ans) {
    if (root === null) return
    getLeftNode(root.left, ans)
    if (root.left === null && root.right === null) {
      ans.push(root.val)
      return
    }
    getLeftNode(root.right, ans)
  }
}
