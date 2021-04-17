class Node {
  constructor(val, min, next) {
    this.val = val
    this.min = min
    this.next = next
  }
}

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.head = null
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.head === null) {
    this.head = new Node(x, x, null)
  } else {
    this.head = new Node(x, Math.min(x, this.head.min), this.head)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.head = this.head.next
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.head.val
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.head.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
