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
  preorder(root)
  return JSON.stringify(ans)

  function preorder(root) {
    if (root === null) {
      ans.push(root)
      return
    }
    ans.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }
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
  return buildTree(data)

  function buildTree(data) {
    const val = data.shift()
    if (val === null) return val
    const root = new TreeNode(val)
    root.left = buildTree(data)
    root.right = buildTree(data)
    return root
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
