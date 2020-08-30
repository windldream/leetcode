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
 * @return {number}
 */
var pseudoPalindromicPaths = function (root) {
  let ans = 0
  const validVal = [0, 1, 1 << 1, 1 << 2, 1 << 3, 1 << 4, 1 << 5, 1 << 6, 1 << 7, 1 << 8]
  dfs(root, 0)
  return ans

  function dfs(root, path) {
    path ^= 1 << (root.val - 1)
    if (root.left === null && root.right === null) {
      if (validVal.includes(path)) ans++
      return
    }
    if (root.left) {
      dfs(root.left, path)
    }
    if (root.right) {
      dfs(root.right, path)
    }
  }
}
