/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 === null && t2 === null) {
    return null;
  }
  let root = new TreeNode();
  dfs(root, t1, t2);
  return root;

  function dfs(root, t1, t2) {
    if (t1 === null && t2 === null) {
      return null;
    } else if (t1 === null) {
      root.val = t2.val;
      root.left = t2.left;
      root.right = t2.right;
    } else if (t2 === null) {
      root.val = t1.val;
      root.left = t1.left;
      root.right = t1.right;
    } else {
      root.val = t1.val + t2.val;

      if (t1.left || t2.left) {
        root.left = new TreeNode();
        dfs(root.left, t1.left, t2.left);
      }
      if (t1.right || t2.right) {
        root.right = new TreeNode();
        dfs(root.right, t1.right, t2.right);
      }
    }
  }
};
