/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var flipBinaryTree = function (root, leaf) {
  if (root === leaf) return root
  let cur = leaf
  leaf.left = leaf.parent
  leaf.parent = null
  while (cur.left !== root) {
    if (cur.left.right === cur) {
      cur.left.right = cur.left.left
    }
    cur.left.left = cur.left.parent
    cur.left.parent = cur
    cur = cur.left
  }
  if (cur.left.left === cur) {
    cur.left.left = null
  }
  if (cur.left.right === cur) {
    cur.left.right = null
  }
  cur.left.parent = cur
  return leaf
}
