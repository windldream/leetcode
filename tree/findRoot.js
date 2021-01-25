/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function (tree) {
  const map = new Map()
  for (const node of tree) {
    if (node !== null) {
      for (const child of node.children) {
        map.set(child, node)
      }
    }
  }

  for (const node of tree) {
    if (!map.has(node)) return node
  }
  return null
}
