/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) {
    return root;
  }

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const len = queue.length;
    let pre = null;

    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (i > 0) {
        pre.next = cur;
      }
      pre = cur;
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  return root;
};
