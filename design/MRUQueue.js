/**
 * @param {number} n
 */
var MRUQueue = function (n) {
  this.queue = Array(n)
    .fill(0)
    .map((val, idx) => idx + 1)
  this.size = n
}

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  const val = this.queue[k - 1]
  this.queue.splice(k - 1, 1)
  this.queue.push(val)
  return val
}

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */
