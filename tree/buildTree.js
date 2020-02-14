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
var buildTree = function(preorder, inorder) {
  return helper(preorder, 0, preorder.length, inorder, 0, inorder.length);

  function helper(preorder, pStart, pEnd, inorder, iStart, iEnd) {
    if (pStart === pEnd) {
      return null;
    }

    const val = preorder[pStart];
    const root = new TreeNode(val);
    const rootIndex = inorder.indexOf(val, iStart);
    const leftNum = rootIndex - iStart;

    root.left = helper(
      preorder,
      pStart + 1,
      pStart + leftNum + 1,
      inorder,
      iStart,
      rootIndex
    );
    root.right = helper(
      preorder,
      pStart + leftNum + 1,
      pEnd,
      inorder,
      rootIndex + 1,
      iEnd
    );

    return root;
  }
};
