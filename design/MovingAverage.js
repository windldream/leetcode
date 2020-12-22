/**
 * Initialize your data structure here.
 * @param {number} size
 */
const MovingAverage = function(size) {
  this.list = []
  this.size = size
  this.sum = 0
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.list.length < this.size) {
    this.sum += val
    this.list.push(val)
    return this.sum / this.list.length
  }
  this.sum -= this.list[0]
  this.list.shift()
  this.list.push(val)
  this.sum += val
  return this.sum / this.size
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */