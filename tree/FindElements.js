/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  this.res = [];
  dfs(root, 0, this.res);

  function dfs(root, val, res) {
    if (root === null) {
      return;
    }
    root.val = val;
    res.push(val);
    if (root.left) {
      dfs(root.left, 2 * val + 1, res);
    }
    if (root.right) {
      dfs(root.right, 2 * val + 2, res);
    }
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.res.includes(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
