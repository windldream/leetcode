/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// var inorderSuccessor = function (root, p) {
//   let prev = null
//   let ans = null
//   inorder(root, p)
//   return ans

//   function inorder(root, p) {
//     if (root === null) return
//     inorder(root.right, p)
//     if (root === p) {
//       ans = prev
//       return
//     }
//     prev = root
//     inorder(root.left, p)
//   }
// }

var inorderSuccessor = function (root, p) {
  if (root === null) return root
  if (root.val <= p.val) return inorderSuccessor(root.right, p)
  const left = inorderSuccessor(root.left, p)
  if (left) return left
  return root
}
