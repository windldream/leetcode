/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.vals = [];
  this.idx = new Map();
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  if (!this.idx.has(val)) {
    this.idx.set(val, new Set());
  }
  this.idx.get(val).add(this.vals.length);
  this.vals.push(val);
  return this.idx.get(val).size === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  const idxs = this.idx.get(val);
  if (!idxs || idxs.size === 0) return false;
  const removeIdx = Array.from(idxs).pop();
  idxs.delete(removeIdx);
  if (removeIdx !== this.vals.length - 1) {
    const lastVal = this.vals[this.vals.length - 1];
    this.idx.get(lastVal).delete(this.vals.length - 1);
    this.idx.get(lastVal).add(removeIdx);
    this.vals[removeIdx] = lastVal;
  }
  this.vals.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.vals.length);
  return this.vals[random];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
