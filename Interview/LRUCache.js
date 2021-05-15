/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity
  this.map = new Map()
  this.stack = []
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1
  const val = this.map.get(key)
  const idx = this.stack.indexOf(key)
  this.stack.splice(idx, 1)
  this.stack.push(key)
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const idx = this.stack.indexOf(key)
    this.stack.splice(idx, 1)
  } else if (this.map.size >= this.cap) {
    const delKey = this.stack[0]
    this.stack.shift()
    this.map.delete(delKey)
  }
  this.map.set(key, value)
  this.stack.push(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
