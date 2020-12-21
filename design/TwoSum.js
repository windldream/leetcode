/**
 * Initialize your data structure here.
 */
const TwoSum = function() {
  this.map = new Map()
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  this.map.set(number, (this.map.get(number) || 0) + 1)
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  for (const [number, val] of this.map) {
    if (this.map.has(value - number)) {
      if (value - number !== number) return true
      if (val >= 2) return true
    }
  }
  return false
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */