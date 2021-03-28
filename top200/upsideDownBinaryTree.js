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
 * @return {TreeNode}
 */
// var upsideDownBinaryTree = function (root) {
//   if (root === null || root.left === null) return root
//   const left = root.left
//   const right = root.right
//   const newRoot = upsideDownBinaryTree(left)
//   left.left = right
//   left.right = root
//   root.left = null
//   root.right = null
//   return newRoot
// }

var upsideDownBinaryTree = function (root) {
  if (root === null || root.left === null) return root

  const stack = []
  while (root) {
    stack.push(root)
    root = root.left
  }

  let newRoot = stack.pop()
  let ans = newRoot
  while (stack.length) {
    root = stack.pop()
    newRoot.right = root
    newRoot.left = root.right
    newRoot = newRoot.right
  }
  root.left = null
  root.right = null
  return ans
}
