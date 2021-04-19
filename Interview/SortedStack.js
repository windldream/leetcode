var SortedStack = function () {
  this.minStack = []
  this.helpStack = []
}

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  // 单调递减栈
  while (this.minStack.length && this.minStack[this.minStack.length - 1] < val) {
    this.helpStack.push(this.minStack.pop())
  }
  this.minStack.push(val)
  while (this.helpStack.length) {
    this.minStack.push(this.helpStack.pop())
  }
}

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  if (this.isEmpty()) return
  return this.minStack.pop()
}

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) return
  return this.minStack[this.minStack.length - 1]
}

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.minStack.length === 0
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
