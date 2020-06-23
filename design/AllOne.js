/**
 * Initialize your data structure here.
 */
var AllOne = function() {
  this.map = new Map();
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
  if (!this.map.has(key)) {
    this.map.set(key, 1);
  }
  this.map.set(key, this.map.get(key) + 1);
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
  if (this.map.has(key)) {
    const val = this.map.get(key);
    if (val === 1) {
      this.map.delete(key);
    } else {
      this.map.set(key, val - 1);
    }
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
  const size = this.map.size;
  if (size > 0) {
    let max = 0;
    let maxKey = '';
    for (const [key, val] of this.map) {
      if (val > max) {
        max = val;
        maxKey = key;
      }
    }
    return maxKey;
  }
  return '';
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
  const size = this.map.size;
  if (size > 0) {
    let min = Infinity;
    let minKey = '';
    for (const [key, val] of this.map) {
      if (val < min) {
        min = val;
        minKey = key;
      }
    }
    return minKey;
  }
  return '';
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
