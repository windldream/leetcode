/**
 * Initialize your data structure here.
 */
const HitCounter = function() {
  this.counters = []
  this.latest = 5 * 60
};

/**
 * Record a hit.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  this.counters.push(timestamp)
};

/**
 * Return the number of hits in the past 5 minutes.
 @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  const len = this.counters.length
  if (timestamp <= this.latest) return len
  let count = 0
  for (let i = len - 1; i >= 0; i--) {
    if (timestamp - this.counters[i] < this.latest) count++
  }
  return count
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */