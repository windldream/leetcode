/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = []
  this.maxSize = maxSize
}

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length === this.maxSize) return
  this.stack.push(x)
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!this.stack.length) return -1
  return this.stack.pop()
}

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  this.stack = this.stack.map((v, index) => {
    if (index < k) {
      return v + val
    }
    return v
  })
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
