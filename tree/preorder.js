/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = [];
  dfs(root);
  return res;

  function dfs(root) {
    if (root === null) {
      return;
    }
    res.push(root.val);
    if (root.children) {
      for (let child of root.children) {
        dfs(child);
      }
    }
  }
};
