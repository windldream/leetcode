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
 * @return {number[]}
 */
// var inorderTraversal = function (root) {
//   const ans = []
//   inorder(root)
//   return ans

//   function inorder(root) {
//     if (root === null) return
//     inorder(root.left)
//     ans.push(root.val)
//     inorder(root.right)
//   }
// }

var inorderTraversal = function (root) {
  const ans = []
  const stack = []
  while (root || stack.length) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      ans.push(root.val)
      root = root.right
    }
  }
  return ans
}
