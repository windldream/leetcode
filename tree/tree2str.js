/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  return preorder(t);

  function preorder(root) {
    if (root === null) {
      return '';
    }
    let str = '';
    str += root.val;
    if (root.left || root.right) {
      str += '(' + preorder(root.left) + ')';
    }
    if (root.right) {
      str += '(' + preorder(root.right) + ')';
    }
    return str;
  }
};
