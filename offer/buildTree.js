/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return rebuild(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)

  function rebuild(preorder, pStart, pEnd, inorder, iStart, iEnd) {
    if (pStart > pEnd) return null

    const val = preorder[pStart]
    const root = new TreeNode(val)
    const index = inorder.indexOf(val)
    const leftNum = index - iStart
    root.left = rebuild(preorder, pStart + 1, pStart + leftNum, inorder, iStart, index - 1)
    root.right = rebuild(preorder, pStart + leftNum + 1, pEnd, inorder, index + 1, iEnd)
    return root
  }
}
