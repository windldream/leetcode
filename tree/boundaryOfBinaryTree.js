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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function (root) {
  const res = []
  if (root === null) return res
  if (!isLeaf(root)) {
    res.push(root.val)
  }

  let l = root.left
  while (l !== null) {
    if (!isLeaf(l)) {
      res.push(l.val)
    }
    if (l.left != null) {
      l = l.left
    } else {
      l = l.right
    }
  }

  addLeaves(res, root)
  const stack = []
  let r = root.right
  while (r !== null) {
    if (!isLeaf(r)) {
      stack.push(r.val)
    }
    if (r.right !== null) {
      r = r.right
    } else {
      r = r.left
    }
  }
  while (stack.length) {
    res.push(stack.pop())
  }
  return res

  function isLeaf(node) {
    return node.left === null && node.right === null
  }

  function addLeaves(res, root) {
    if (isLeaf(root)) {
      res.push(root.val)
    } else {
      if (root.left !== null) {
        addLeaves(res, root.left)
      }
      if (root.right !== null) {
        addLeaves(res, root.right)
      }
    }
  }
}
