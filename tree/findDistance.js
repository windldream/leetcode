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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function (root, p, q) {
  if (p === q) return 0
  const nodep = findNode(root, p)
  const nodeq = findNode(root, q)
  const [h1, isHasQ] = getHeight(nodep, nodeq)
  const [h2, isHasP] = getHeight(nodeq, nodep)
  if (isHasQ) {
    return h1
  } else if (isHasP) {
    return h2
  } else {
    return getHeight(root, nodep)[0] + getHeight(root, nodeq)[0]
  }

  function getHeight(root, p) {
    if (root === p) return [0, true]
    if (root === null) return [0, false]
    const [l, isHasL] = getHeight(root.left, p)
    const [r, isHasR] = getHeight(root.right, p)
    if (!(isHasL || isHasR)) {
      return [0, false]
    }
    return [Math.max(l, r) + 1, isHasL || isHasR]
  }

  function findNode(root, p) {
    if (root === null) return null
    if (root.val === p) return root
    return findNode(root.left, p) || findNode(root.right, p)
  }
}
