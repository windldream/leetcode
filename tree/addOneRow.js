/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    const n = new TreeNode(v);
    n.left = root;
    return n;
  }
  bfs(root, 1);
  return root;

  function bfs(root, level) {
    if (root === null) {
      return;
    }
    if (level === d - 1) {
      let l = root.left;
      root.left = new TreeNode(v);
      root.left.left = l;
      let r = root.right;
      root.right = new TreeNode(v);
      root.right.right = r;
      return;
    }
    bfs(root.left, level + 1);
    bfs(root.right, level + 1);
  }
};
