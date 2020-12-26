const FrontMiddleBackQueue = function() {
  this.queue = []
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.queue.unshift(val)
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const mid = this.queue.length >> 1
  this.queue.splice(mid, 0, val)
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.queue.push(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.queue.length === 0) return -1
  return this.queue.shift()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (this.queue.length === 0) return -1
  const mid = (this.queue.length & 1) ? this.queue.length >> 1 : (this.queue.length >> 1) - 1
  const val = this.queue[mid]
  this.queue.splice(mid, 1)
  return val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.queue.length === 0) return -1
  return this.queue.pop()
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */