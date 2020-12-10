/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = next === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
  if (root === null) return null
  const map = new Map()
  dfs(root, map)
  build(root, map)
  return map.get(root)

  function build(root, map) {
    if (root === null) return
    const node = map.get(root)
    node.left = root.left ? map.get(root.left) : null
    node.right = root.right ? map.get(root.right) : null
    node.random = root.random ? map.get(root.random) : null
    build(root.left, map)
    build(root.right, map)
  }

  function dfs(root, map) {
    if (root === null) return
    const node = new Node(root.val)
    map.set(root, node)
    dfs(root.left, map)
    dfs(root.right, map)
  }
}
