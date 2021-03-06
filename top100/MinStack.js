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
// var MinStack = function () {
//   this.head = null
// }

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   if (this.head === null) {
//     this.head = new Node(x, x, null)
//   } else {
//     this.head = new Node(x, Math.min(x, this.head.min), this.head)
//   }
// }

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.head = this.head.next
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.head.val
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.head.min
// }

// var MinStack = function () {
//   this.stack = []
//   this.minStack = []
// }

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   this.stack.push(x)
//   if (this.minStack.length) {
//     if (x <= this.minStack[this.minStack.length - 1]) {
//       this.minStack.push(x)
//     }
//   } else {
//     this.minStack.push(x)
//   }
// }

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   const val = this.stack.pop()
//   if (val !== this.minStack[this.minStack.length - 1]) return
//   this.minStack.pop()
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1]
// }

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.minStack[this.minStack.length - 1]
// }

var MinStack = function () {
  this.stack = []
  this.min = Infinity
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (x <= this.min) {
    this.stack.push(this.min)
    this.min = x
  }
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.pop() === this.min) {
    this.min = this.stack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
