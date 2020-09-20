var MyCalendarTwo = function () {
  this.calendar = []
  this.overlaps = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (const [s, e] of this.overlaps) {
    if (start < e && end > s) return false
  }
  for (const [s, e] of this.calendar) {
    if (start < e && end > s) {
      this.overlaps.push([Math.max(s, start), Math.min(e, end)])
    }
  }
  this.calendar.push([start, end])
  return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
