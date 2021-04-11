var MaxQueue = function () {
  this.queue = []
  this.stack = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.queue.length === 0) return -1
  return this.stack[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (this.stack && this.stack[this.stack.length - 1] < value) {
    this.stack.pop()
  }
  this.stack.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length === 0) return -1
  const val = this.queue.shift()
  if (val === this.stack[0]) this.stack.shift()
  return val
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
