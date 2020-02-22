/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
  if (root === null) {
    return '';
  }
  const codeMap = [],
    a = 'a'.charCodeAt();
  for (let i = 0; i <= 25; i++) {
    const code = String.fromCharCode(i + a);
    codeMap[i] = code;
  }
  const res = [];
  dfs(root, '');
  res.sort();
  return res[0];

  function dfs(root, path) {
    if (root === null) {
      return;
    }
    path += codeMap[root.val];
    if (root.left === null && root.right === null) {
      res.push(
        path
          .split('')
          .reverse()
          .join('')
      );
      return;
    }
    dfs(root.left, path);
    dfs(root.right, path);
  }
};
