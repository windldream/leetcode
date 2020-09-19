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
  return helper(preorder, 0, preorder.length, inorder, 0, inorder.length)

  function helper(preorder, pStart, pEnd, inorder, inStart, inEnd) {
    if (pStart === pEnd) return null
    const root = new TreeNode(preorder[pStart])
    // 确定根结点的索引
    const rootIndex = inorder.indexOf(root.val, inStart)
    // 左子节点的数量
    const leftNum = rootIndex - inStart
    root.left = helper(preorder, pStart + 1, pStart + 1 + leftNum, inorder, inStart, rootIndex)
    root.right = helper(preorder, pStart + 1 + leftNum, pEnd, inorder, rootIndex + 1, inEnd)
    return root
  }
}
