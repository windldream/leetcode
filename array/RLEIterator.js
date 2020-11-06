/**
 * @param {number[]} A
 */
var RLEIterator = function (A) {
  this.list = A
  this.index = 0
}

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  while (this.index < this.list.length) {
    if (this.list[this.index] <= 0) {
      this.index += 2
      continue
    }
    this.list[this.index] -= n
    if (this.list[this.index] >= 0) {
      return this.list[this.index + 1]
    }
    n = -this.list[this.index]
  }
  return -1
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */
