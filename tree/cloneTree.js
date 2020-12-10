/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneTree = function (root) {
  if (root === null) return null
  const map = new Map()
  dfs(root)
  return map.get(root)

  function dfs(root) {
    if (root === null) return null
    const copy = new Node(root.val)
    for (const child of root.children) {
      copy.children.push(dfs(child))
    }
    map.set(root, copy)
    return copy
  }
}
