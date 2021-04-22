/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function (root, sum) {
  const preSumCount = new Map()
  preSumCount.set(0, 1)
  return recurisonPathSum(root, preSumCount, sum, 0)

  function recurisonPathSum(node, preSumCount, target, curSum) {
    if (node === null) return 0
    let ans = 0
    curSum += node.val
    ans += preSumCount.get(curSum - target) || 0
    preSumCount.set(curSum, (preSumCount.get(curSum) || 0) + 1)
    ans += recurisonPathSum(node.left, preSumCount, target, curSum)
    ans += recurisonPathSum(node.right, preSumCount, target, curSum)
    preSumCount.set(curSum, preSumCount.get(curSum) - 1)
    return ans
  }
}
