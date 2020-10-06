var RecentCounter = function () {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)
  let ans = 0
  for (let i = 0; i < this.queue.length; i++) {
    if (this.queue[i] >= t - 3000 && this.queue[i] <= t) ans++
  }
  return ans
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
