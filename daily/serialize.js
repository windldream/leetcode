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
  const queue = [root]
  const ans = []
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      ans.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      ans.push('#')
    }
  }
  return ans.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '#') return null
  data = data.split(',')
  const root = new TreeNode(data[0])
  const queue = [root]
  let idx = 1
  while (idx < data.length) {
    const parent = queue.shift()
    const leftVal = data[idx]
    const rightVal = data[idx + 1]
    if (leftVal !== '#') {
      const left = new TreeNode(leftVal)
      parent.left = left
      queue.push(left)
    }
    if (rightVal !== '#') {
      const right = new TreeNode(rightVal)
      parent.right = right
      queue.push(right)
    }
    idx += 2
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
