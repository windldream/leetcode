/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  if (root === null) {
    return root;
  }
  const res = [];
  dfs(root, 1);
  return res;

  function dfs(root, isDeleted) {
    if (root === null) {
      return null;
    }
    // 如果父节点需要删除 就删除父子节点关系
    if (to_delete.includes(root.val)) {
      dfs(root.left, 1);
      dfs(root.right, 1);
      root = null;
    } else {
      root.left = dfs(root.left, 0);
      root.right = dfs(root.right, 0);
      if (isDeleted) {
        res.push(root);
      }
    }
    return root;
  }
};
