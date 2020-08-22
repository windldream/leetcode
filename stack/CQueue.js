var CQueue = function () {
  this.stack = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  return this.stack.shift() || -1
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
