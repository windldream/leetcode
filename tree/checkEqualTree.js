/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  const sum = getSum(root)
  let ans = false
  postorder(root, sum / 2, root)
  return ans

  function postorder(node, target, root) {
    if (node === null) return 0
    const l = postorder(node.left, target, root)
    const r = postorder(node.right, target, root)
    if (
      (node.left !== null && l === target) ||
      (node.right !== null && r === target) ||
      (node !== root && node.val + l + r === target)
    ) {
      ans = true
    }
    return l + r + node.val
  }

  function getSum(node) {
    if (node === null) return 0
    const l = getSum(node.left)
    const r = getSum(node.right)
    return node.val + l + r
  }
}
