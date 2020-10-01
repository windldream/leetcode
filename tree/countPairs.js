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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let ans = 0
  dfs(root, distance)
  return ans

  function dfs(root, distance) {
    if (root === null) return []
    if (root.left === null && root.right === null) return [0]

    const res = []
    const left = dfs(root.left, distance)
    for (let i = 0; i < left.length; i++) {
      left[i] += 1
      if (left[i] > distance) continue
      res.push(left[i])
    }

    const right = dfs(root.right, distance)
    for (let i = 0; i < right.length; i++) {
      right[i] += 1
      if (right[i] > distance) continue
      res.push(right[i])
    }

    for (const l of left) {
      for (const r of right) {
        ans += l + r <= distance ? 1 : 0
      }
    }

    return res
  }
}
