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
// var serialize = function (root) {
//   if (root === null) return JSON.stringify([])
//   const ans = []
//   preorder(root)
//   return JSON.stringify(ans)

//   function preorder(root) {
//     if (root === null) {
//       ans.push(root)
//       return
//     }
//     ans.push(root.val)
//     preorder(root.left)
//     preorder(root.right)
//   }
// }

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
      ans.push('symbol')
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
// var deserialize = function (data) {
//   data = JSON.parse(data)
//   if (data.length === 0) return null
//   return buildTree(data)

//   function buildTree(data) {
//     const val = data.shift()
//     if (val === null) return val
//     const root = new TreeNode(val)
//     root.left = buildTree(data)
//     root.right = buildTree(data)
//     return root
//   }
// }

var deserialize = function (data) {
  if (data === 'symbol') return null
  data = data.split(',')
  const root = new TreeNode(data[0])
  const queue = [root]
  let cursor = 1
  while (cursor < data.length) {
    const parent = queue.shift()
    const leftVal = data[cursor]
    const rightVal = data[cursor + 1]
    if (leftVal !== 'symbol') {
      const leftNode = new TreeNode(leftVal)
      parent.left = leftNode
      queue.push(leftNode)
    }
    if (rightVal !== 'symbol') {
      const rightNode = new TreeNode(rightVal)
      parent.right = rightNode
      queue.push(rightNode)
    }
    cursor += 2
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
