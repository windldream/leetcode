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
var lowestCommonAncestor = function (p, q) {
  const parents = []
  while (p) {
    parents.push(p)
    p = p.parent
  }

  while (q) {
    if (parents.includes(q)) return q
    q = q.parent
  }

  return root
}
