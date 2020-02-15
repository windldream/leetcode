/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  while (root !== null) {
    if (root.left === null) {
      root = root.right;
    } else {
      let pre = root.left;
      // 找到左节点最右的位置
      while (pre.right !== null) {
        pre = pre.right;
      }
      // 将右节点放在左节点最右的位置
      pre.right = root.right;
      // 右节点原先的位置用左节点填充
      root.right = root.left;
      root.left = null;

      root = root.right;
    }
  }
};
