var RecentCounter = function () {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const queue = this.queue
  queue.push(t)
  let l = 0
  let r = queue.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (queue[mid] < t - 3000) {
      l = mid + 1
    } else if (queue[mid] >= t - 3000) {
      r = mid
    }
  }
  return queue.length - l
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
