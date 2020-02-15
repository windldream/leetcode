/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return helper(inorder, 0, inorder.length, postorder, 0, postorder.length);

  function helper(inorder, iStart, iEnd, postorder, pStart, pEnd) {
    if (pStart === pEnd) {
      return null;
    }

    const rootVal = postorder[pEnd - 1];
    const root = new TreeNode(rootVal);
    const rootIndex = inorder.indexOf(rootVal, iStart);
    const leftNum = rootIndex - iStart;

    root.left = helper(
      inorder,
      iStart,
      rootIndex,
      postorder,
      pStart,
      pStart + leftNum
    );
    root.right = helper(
      inorder,
      rootIndex + 1,
      iEnd,
      postorder,
      pStart + leftNum,
      pEnd - 1
    );
    return root;
  }
};
