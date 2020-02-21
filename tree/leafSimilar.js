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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const res1 = [],
    res2 = [];
  dfs(root1, res1);
  dfs(root2, res2);
  if (res1.length === 0) {
    return res2.length === 0;
  }

  for (let i = 0; i < res1.length; i++) {
    if (res1[i] !== res2[i]) {
      return false;
    }
  }

  return true;

  function dfs(root, res) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      res.push(root.val);
    }

    dfs(root.left, res);
    dfs(root.right, res);
  }
};
