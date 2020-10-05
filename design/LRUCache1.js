/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.keys = []
  this.size = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1
  const index = this.keys.indexOf(key)
  this.keys.splice(index, 1)
  this.keys.push(key)
  return this.map.get(key)
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const index = this.keys.indexOf(key)
    this.keys.splice(index, 1)
  } else {
    if (this.map.size === this.size) {
      const deleteKey = this.keys.shift()
      this.map.delete(deleteKey)
    }
  }
  this.keys.push(key)
  this.map.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
