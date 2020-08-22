var MaxQueue = function () {
  this.queue = []
  this.help = []
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.queue.length == 0) return -1
  return this.help[0]
}

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value)
  while (this.help.length && value > this.help[this.help.length - 1]) {
    this.help.pop()
  }
  this.help.push(value)
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length == 0) return -1
  let val = this.queue.shift()
  if (this.help[0] === val) {
    this.help.shift()
  }
  return val
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
