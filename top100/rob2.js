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
var rob = function (root) {
  const memo = new Map()
  return dfs(root)

  function dfs(root) {
    if (root === null) return 0
    if (memo.has(root)) return memo.get(root)
    // 选择当前节点
    let ans = root.val
    if (root.left) {
      ans += dfs(root.left.left) + dfs(root.left.right)
    }
    if (root.right) {
      ans += dfs(root.right.left) + dfs(root.right.right)
    }

    // 不选择当前节点
    memo.set(root, Math.max(dfs(root.left) + dfs(root.right), ans))
    return memo.get(root)
  }
}

//
