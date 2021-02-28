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
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//   if (root === null) return true
//   return dfs(root.left, root.right)
//   function dfs(left, right) {
//     if (left === null && right === null) return true
//     if (left === null || right === null) return false
//     if (left.val !== right.val) return false
//     return dfs(left.left, right.right) && dfs(left.right, right.left)
//   }
// }

var isSymmetric = function (root) {
  if (root === null) return true
  let stack = []
  stack.push(root)
  while (stack.length) {
    const len = stack.length
    const temp = []
    for (let i = 0; i < len; i++) {
      const head = stack[i]
      const tail = stack[len - 1 - i]
      if (head === null && tail === null) continue
      if (head === null || tail === null) return false
      if (head.val !== tail.val) return false
      temp.push(head.left)
      temp.push(head.right)
    }
    stack = temp
  }
  return true
}
