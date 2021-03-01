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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//   while (root !== null) {
//     if (root.left === null) {
//       root = root.right
//     } else {
//       // 寻找左子树的最右节点
//       let pre = root.left
//       while (pre.right !== null) {
//         pre = pre.right
//       }
//       // 将原来的右子树拼接到左子树的最右节点
//       pre.right = root.right
//       // 将左子树插入到右子树的地方
//       root.right = root.left
//       // 断开左子树连接
//       root.left = null
//       // 下一个节点
//       root = root.right
//     }
//   }
// }

var flatten = function (root) {
  let pre = null
  postorder(root)

  function postorder(root) {
    if (root === null) return
    postorder(root.right)
    postorder(root.left)
    root.right = pre
    root.left = null
    pre = root
  }
}
