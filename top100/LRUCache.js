/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.stack = []
  this.cache = new Map()
  this.cap = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const index = this.stack.indexOf(key)
    this.stack.splice(index, 1)
    this.stack.push(key)
    return this.cache.get(key)
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const index = this.stack.indexOf(key)
    this.stack.splice(index, 1)
  } else if (this.cache.size === this.cap) {
    const delKey = this.stack[0]
    this.stack.shift()
    this.cache.delete(delKey)
  }
  this.stack.push(key)
  this.cache.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
