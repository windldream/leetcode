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
 */
var BSTIterator = function (root) {
  const ans = []
  inorder(root)
  this.list = ans
  this.index = -1

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    ans.push(root.val)
    inorder(root.right)
  }
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.index < this.list.length - 1
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index++
  return this.list[this.index]
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasPrev = function () {
  return this.index > 0
}

/**
 * @return {number}
 */
BSTIterator.prototype.prev = function () {
  this.index--
  return this.list[this.index]
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.hasNext()
 * var param_2 = obj.next()
 * var param_3 = obj.hasPrev()
 * var param_4 = obj.prev()
 */
