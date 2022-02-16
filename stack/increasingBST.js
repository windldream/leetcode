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
  const dummyNode = new TreeNode()
  let temp = dummyNode
  inorder(root)

  return dummyNode.right

  function inorder(root) {
    if (root === null) return

    inorder(root.left)
    temp.right = new TreeNode(root.val)
    temp = temp.right
    inorder(root.right)
  }
}
