var CQueue = function () {
  this.queue1 = []
  this.queue2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.queue1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.queue2.length === 0) {
    if (this.queue1.length === 0) return -1
    while (this.queue1.length) {
      this.queue2.push(this.queue1.pop())
    }
  }
  return this.queue2.pop()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
