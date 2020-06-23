/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.keys = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const index = this.keys.indexOf(key);
    this.keys.splice(index, 1);
    this.keys.unshift(key);
    const list = this.map.get(key);
    list[1] += 1;
    this.map.set(key, list);
    return list[0];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity < 1) return;
  if (this.map.size < this.capacity) {
    if (this.map.has(key)) {
      const index = this.keys.indexOf(key);
      this.keys.splice(index, 1);
      this.keys.unshift(key);
      const list = this.map.get(key);
      list[1] += 1;
      this.map.set(key, [value, list[1]]);
    } else {
      this.map.set(key, [value, 0]);
      this.keys.unshift(key);
    }
  } else {
    if (this.map.has(key)) {
      const list = this.map.get(key);
      list[1] += 1;
      this.map.set(key, [value, list[1]]);
      const index = this.keys.indexOf(key);
      this.keys.splice(index, 1);
      this.keys.unshift(key);
    } else {
      let min = Infinity;
      for (const [key1, [val, count]] of this.map) {
        min = Math.min(min, count);
      }
      const keys = [];
      for (const [key1, [val, count]] of this.map) {
        if (count === min) {
          keys.push(key1);
        }
      }
      if (keys.length === 1) {
        const index = this.keys.indexOf(keys[0]);
        this.keys.splice(index, 1);
        this.keys.unshift(key);
        this.map.delete(keys[0]);
        this.map.set(key, [value, 0]);
      } else {
        keys.sort((a, b) => {
          return this.keys.indexOf(b) - this.keys.indexOf(a);
        });
        const index = this.keys.indexOf(keys[0]);
        this.keys.splice(index, 1);
        this.keys.unshift(key);
        this.map.delete(keys[0]);
        this.map.set(key, [value, 0]);
      }
    }
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
