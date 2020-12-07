/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function (node) {
  if (node === null) return node
  if (node.right) {
    let cur = node.right
    while (cur && cur.left) {
      cur = cur.left
    }
    return cur
  } else {
    let parent = node.parent
    while (parent && parent.val < node.val) {
      parent = parent.parent
    }
    return parent
  }
}
// 如果一个节点有右子树，则答案一定是右子树中最左边的节点。 如果这个节点没有右子树，则答案是第一个比它大的祖先节点。
