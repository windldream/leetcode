/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function (root, V) {
  if (root === null) {
    return [null, null]
  } else if (root.val <= V) {
    const bns = splitBST(root.right, V)
    root.right = bns[0]
    bns[0] = root
    return bns
  } else {
    const bns = splitBST(root.left, V)
    root.left = bns[1]
    bns[1] = root
    return bns
  }
}
