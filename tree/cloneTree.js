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
  build(root)
  return map.get(root)

  function build(root) {
    if (root === null) return
    const node = map.get(root)
    for (const child of root.children) {
      node.children.push(map.get(child))
      build(child)
    }
  }

  function dfs(root) {
    if (root === null) return
    const copy = new Node(root.val)
    map.set(root, copy)
    for (const child of root.children) {
      dfs(child)
    }
  }
}
