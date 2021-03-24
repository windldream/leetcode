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
 * @param {number} sum
 * @return {number}
 */
// var pathSum = function (root, sum) {
//   let ans = 0
//   preorder(root)
//   return ans

//   function dfs(root, pathSum) {
//     if (root == null) return
//     pathSum += root.val
//     if (pathSum === sum) ans++
//     dfs(root.left, pathSum)
//     dfs(root.right, pathSum)
//   }

//   function preorder(root) {
//     if (root === null) return
//     dfs(root, 0)
//     preorder(root.left, 0)
//     preorder(root.right, 0)
//   }
// }

var pathSum = function (root, sum) {
  const countMap = new Map()
  countMap.set(0, 1)
  return recursionPathSum(root, countMap, sum, 0)

  function recursionPathSum(node, countMap, sum, curSum) {
    if (node === null) return 0
    let ans = 0
    curSum += node.val
    ans += countMap.get(curSum - sum) || 0
    countMap.set(curSum, (countMap.get(curSum) || 0) + 1)
    ans += recursionPathSum(node.left, countMap, sum, curSum)
    ans += recursionPathSum(node.right, countMap, sum, curSum)
    countMap.set(curSum, countMap.get(curSum) - 1)
    return ans
  }
}
