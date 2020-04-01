/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = [];
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.has(key)) {
    let index = this.cache.indexOf(key);
    this.cache.splice(index, 1);
    this.cache.unshift(key);
    return this.map.get(key);
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.has(key)) {
    this.map.set(key, value);
    let index = this.cache.indexOf(key);
    this.cache.splice(index, 1);
    this.cache.unshift(key);
    return;
  }
  if (this.cache.length === this.capacity) {
    let key = this.cache.pop();
    this.map.delete(key);
  }
  this.cache.unshift(key);
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
