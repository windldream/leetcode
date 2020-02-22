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
var CBTInserter = function(root) {
  this.arrays = [];
  bfs(root);

  function bfs(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
      const node = queue.shift();
      this.arrays.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  const node = new TreeNode(v),
    parentPos = Math.floor((this.arrays.length - 1) / 2);
  this.arrays.push(node);

  if (this.arrays.length > 1) {
    const parent = this.arrays[parentPos];
    if (!parent.left) {
      parent.left = node;
    } else {
      parent.right = node;
    }
    return parent.val;
  } else {
    return null;
  }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.arrays.length > 0 ? this.arrays[0] : null;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */
