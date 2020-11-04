var MyCalendar = function () {
  this.times = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.times.length === 0) {
    this.times.push([start, end])
    return true
  }
  for (const [l, r] of this.times) {
    if (!(start >= r || end <= l)) return false
  }
  this.times.push([start, end])
  return true
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
