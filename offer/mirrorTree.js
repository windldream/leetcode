/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var mirrorTree = function (root) {
//   if (root === null) return root
//   const left = root.left
//   root.left = mirrorTree(root.right)
//   root.right = mirrorTree(left)
//   return root
// }

var mirrorTree = function (root) {
  if (root === null) return root
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
    const left = node.left
    node.left = node.right
    node.right = left
  }
  return root
}
