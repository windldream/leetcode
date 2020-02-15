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

  if (root.left) {
    root.left.next = root.right;
    if (root.next) {
      root.right.next = root.next.left;
    }
  }

  connect(root.left);
  connect(root.right);

  return root;
};
