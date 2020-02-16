/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = [];
  if (root === null) {
    return JSON.stringify(res);
  }
  helper(root);
  return JSON.stringify(res);

  function helper(root) {
    if (root === null) {
      res.push(null);
      return;
    }
    res.push(root.val);
    helper(root.left);
    helper(root.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = JSON.parse(data);
  if (data.length === 0) {
    return null;
  }
  return rebuild(data);

  function rebuild(data) {
    if (data[0] === null) {
      data.shift();
      return null;
    }
    const root = new TreeNode(data[0]);
    data.shift();

    root.left = rebuild(data);
    root.right = rebuild(data);
    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
