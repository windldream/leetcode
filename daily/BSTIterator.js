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
// var BSTIterator = function (root) {
//   this.iterator = generator(root)
//   this.cur = this.iterator.next()

//   function* generator(root) {
//     if (root === null) return
//     yield* generator(root.left)
//     yield root.val
//     yield* generator(root.right)
//   }
// }

// /**
//  * @return {number}
//  */
// BSTIterator.prototype.next = function () {
//   const val = this.cur.value
//   this.cur = this.iterator.next()
//   return val
// }

// /**
//  * @return {boolean}
//  */
// BSTIterator.prototype.hasNext = function () {
//   return !this.cur.done
// }

var BSTIterator = function (root) {
  this.stack = []
  while (root) {
    this.stack.push(root)
    root = root.left
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const cur = this.stack.pop()
  let root = cur.right
  while (root) {
    this.stack.push(root)
    root = root.left
  }
  return cur.val
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
