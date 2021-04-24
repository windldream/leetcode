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
// var increasingBST = function (root) {
//   const dummyHead = new TreeNode()
//   let cur = dummyHead
//   inorder(root)
//   return dummyHead.right

//   function inorder(root) {
//     if (root === null) return
//     inorder(root.left)
//     cur.right = new TreeNode(root.val)
//     cur = cur.right
//     inorder(root.right)
//   }
// }

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
var increasingBST = function (root) {
  const dummyHead = new TreeNode()
  let cur = dummyHead
  inorder(root)
  return dummyHead.right

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    root.left = null
    cur.right = root
    cur = cur.right
    inorder(root.right)
  }
}
