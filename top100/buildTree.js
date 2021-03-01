/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return build(preorder, inorder, 0, preorder.length, 0, inorder.length)

  function build(preorder, inorder, ps, pe, ls, le) {
    if (ps === pe) return null

    // 前序遍历 根节点是第一个节点
    const rootVal = preorder[ps]
    const root = new TreeNode(rootVal)
    // 查找中序遍历的根节点
    const rootIdx = inorder.indexOf(rootVal)
    // 中序遍历可以得到左节点的数量
    const leftCnt = rootIdx - ls

    root.left = build(preorder, inorder, ps + 1, ps + 1 + leftCnt, ls, rootIdx)
    root.right = build(preorder, inorder, ps + 1 + leftCnt, pe, rootIdx + 1, le)
    return root
  }
}

// 前序遍历 -> 根节点 -> 左节点 -> 右节点
// 中序遍历 -> 左节点 -> 根节点 -> 右节点
