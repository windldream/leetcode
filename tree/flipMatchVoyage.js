/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
  const flipped = [];
  let index = 0;
  dfs(root);
  return flipped;

  function dfs(node) {
    if (node !== null) {
      if (node.val !== voyage[index++]) {
        flipped.length = 0;
        flipped.push(-1);
        return;
      }
      if (
        index < voyage.length &&
        node.left &&
        node.left.val !== voyage[index]
      ) {
        flipped.push(node.val);
        dfs(node.right);
        dfs(node.left);
      } else {
        dfs(node.left);
        dfs(node.right);
      }
    }
  }
};
