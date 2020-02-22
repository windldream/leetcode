/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  return buildTree(preorder);

  function buildTree(preorder) {
    if (preorder.length === 0) {
      return null;
    }
    const val = preorder[0];
    const root = new TreeNode(val);
    if (preorder.length === 1) {
      return root;
    }
    let index = -1;
    for (let i = 1; i < preorder.length; i++) {
      if (preorder[i] > val) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      root.left = buildTree(preorder.slice(1, index));
      root.right = buildTree(preorder.slice(index));
    } else {
      root.left = buildTree(preorder.slice(1));
    }
    return root;
  }
};
