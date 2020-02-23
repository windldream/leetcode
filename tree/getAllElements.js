/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const res = [];
  dfs(root1, res);
  dfs(root2, res);
  return res.sort((a, b) => a - b);

  function dfs(root, res) {
    if (root === null) {
      return;
    }
    dfs(root.left, res);
    res.push(root.val);
    dfs(root.right, res);
  }
};
