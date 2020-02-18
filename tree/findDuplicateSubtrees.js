/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const res = [],
    map = {};
  if (root === null) {
    return res;
  }
  dfs(root);
  return res;

  function dfs(root) {
    if (root === null) {
      return '';
    }
    const route = root.val + '&' + dfs(root.left) + '&' + dfs(root.right);
    if (map[route] && map[route] === 1) {
      res.push(root);
    }
    map[route] = (map[route] || 0) + 1;
    return route;
  }
};
