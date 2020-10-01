/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root === null) return JSON.stringify([])
  const ans = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    let len = queue.length
    while (len > 0) {
      const node = queue.shift()
      ans.push(node && node.val)
      if (node !== null) {
        queue.push(node.left)
        queue.push(node.right)
      }
      len--
    }
  }
  return JSON.stringify(ans)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = JSON.parse(data)
  if (data.length === 0) return null
  const root = new TreeNode(data[0])
  const queue = []
  queue.push(root)
  let i = 1
  while (queue.length) {
    const node = queue.shift()
    if (data[i] !== null) {
      node.left = new TreeNode(data[i])
      queue.push(node.left)
    }
    i++
    if (data[i] !== null) {
      node.right = new TreeNode(data[i])
      queue.push(node.right)
    }
    i++
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
