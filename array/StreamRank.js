const StreamRank = function() {
  this.map = new Map()
};

/**
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function(x) {
  if (!this.map.has(x)) this.map.set(x, 0)
  this.map.set(x, this.map.get(x) + 1)
};

/**
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function(x) {
  let ans = 0
  const keys = [...this.map.keys()].sort((a, b) => a - b)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] > x) break
    ans += this.map.get(keys[i])
  }
  return ans
};

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */