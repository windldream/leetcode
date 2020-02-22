/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const stack = [];
  stack.push([root, null]);

  while (stack.length) {
    const len = stack.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const [node, parent] = stack.shift();
      arr.push({
        val: node.val,
        parent
      });
      if (node.left) {
        stack.push([node.left, node]);
      }
      if (node.right) {
        stack.push([node.right, node]);
      }
    }
    let xnode, ynode;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].val === x) {
        xnode = arr[i].parent;
      }
      if (arr[i].val === y) {
        ynode = arr[i].parent;
      }
    }

    if (xnode && ynode && xnode !== ynode) {
      return true;
    }
  }

  return false;
};
