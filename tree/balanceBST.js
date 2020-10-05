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
var balanceBST = function (root) {
  const trees = []
  inorder(root)
  return buildTree(trees)

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    trees.push(root.val)
    inorder(root.right)
  }

  function buildTree(arr) {
    if (arr.length === 0) return null
    const mid = arr.length >> 1
    const root = new TreeNode(arr[mid])
    root.left = buildTree(arr.slice(0, mid))
    root.right = buildTree(arr.slice(mid + 1))
    return root
  }
}
