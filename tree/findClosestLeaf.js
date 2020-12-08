/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 2 -> 1 -> 3      2 -> 4 -> 5 -> 6
var findClosestLeaf = function (root, k) {
  const g = new Map()
  preorder(root)
  let ans = k
  let level = 0
  const queue = []
  const visited = new Set()
  queue.push(k)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (visited.has(node)) continue
      visited.add(node)
      let list = new Set()
      if (g.has(node)) {
        for (const v of g.get(node)) {
          if (visited.has(v)) continue
          list.add(v)
        }
      }
      if (!g.has(node)) {
        return node
      }
      queue.push(...list)
    }
    level++
  }
  return ans

  function preorder(root, parent) {
    if (root === null) return
    if (root.left) {
      if (root.left.left || root.left.right) {
        if (!g.has(root.left.val)) {
          g.set(root.left.val, [])
        }
        g.get(root.left.val).push(root.val)
      }
      if (!g.has(root.val)) {
        g.set(root.val, [])
      }
      g.get(root.val).push(root.left.val)
      preorder(root.left)
    }
    if (root.right) {
      if (root.right.left || root.right.right) {
        if (!g.has(root.right.val)) {
          g.set(root.right.val, [])
        }
        g.get(root.right.val).push(root.val)
      }
      if (!g.has(root.val)) {
        g.set(root.val, [])
      }
      g.get(root.val).push(root.right.val)
      preorder(root.right)
    }
  }
}
