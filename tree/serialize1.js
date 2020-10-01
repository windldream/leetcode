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
  const ans = []
  dfs(root)
  return JSON.stringify(ans)

  function dfs(root) {
    if (root === null) {
      ans.push(null)
      return
    }
    ans.push(root.val)
    dfs(root.left)
    dfs(root.right)
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
  return rebuild(data)

  function rebuild(data) {
    const node = data.shift()
    if (node === null) return null
    const root = new TreeNode(node)
    root.left = rebuild(data)
    root.right = rebuild(data)
    return root
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
