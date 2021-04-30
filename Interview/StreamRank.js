class Node {
  constructor(val, left, right, small) {
    this.val = val
    this.left = left == null ? null : left
    this.right = right == null ? null : right
    this.small = small || 1
  }
}
var StreamRank = function () {
  this.root = null
}

/**
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function (x) {
  if (this.root === null) {
    this.root = new Node(x)
    return
  }
  insertNode(this.root, x)

  function insertNode(node, x) {
    if (node.val < x) {
      if (node.right) insertNode(node.right, x)
      else {
        node.right = new Node(x)
      }
    } else if (node.val > x) {
      node.small++
      if (node.left) insertNode(node.left, x)
      else {
        node.left = new Node(x)
      }
    } else node.small += 1
  }
}

/**
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function (x) {
  return findNode(this.root, x)

  function findNode(node, x) {
    if (node === null) return 0
    if (node.val === x) return node.small
    if (node.val > x) return findNode(node.left, x)
    return node.small + findNode(node.right, x)
  }
}

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */
