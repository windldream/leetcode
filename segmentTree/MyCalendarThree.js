var MyCalendarThree = function () {
  this.map = new Map()
}

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  if (!this.map.has(start)) {
    this.map.set(start, 0)
  }
  if (!this.map.has(end)) {
    this.map.set(end, 0)
  }
  this.map.set(start, this.map.get(start) + 1)
  this.map.set(end, this.map.get(end) - 1)

  let ans = 0
  let active = 0
  for (const key of [...this.map.keys()].sort((a, b) => a - b)) {
    active += this.map.get(key)
    if (active > ans) {
      ans = active
    }
  }
  return ans
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */
