/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  this.data = []
  this.m = m
  this.k = k
}

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.data.push(num)
}

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.data.length < this.m) return -1
  const last = this.data.slice(this.data.length - this.m)
  last.sort((a, b) => a - b)
  const sum = last.slice(this.k, this.m - this.k).reduce((prev, curr) => prev + curr, 0)
  return Math.floor(sum / (this.m - 2 * this.k))
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
