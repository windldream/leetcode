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
var convertBiNode = function (root) {
  const dummy = new TreeNode()
  let pre = dummy
  inorder(root)
  return dummy.right

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    root.left = null
    pre.right = root
    pre = root
    inorder(root.right)
  }
}
