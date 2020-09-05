/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.total = 0
  this.sum = []
  for (const weight of w) {
    this.total += weight
    this.sum.push(this.total)
  }
  this.w = w
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const random = Math.floor(Math.random() * this.total)
  let lo = 0
  let hi = this.w.length - 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (this.sum[mid] <= random) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  return lo
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
