/**
 * @param {number[]} w
 */
var Solution = function (w) {
  const n = w.length
  let total = 0
  const preSum = []

  for (let i = 0; i < n; i++) {
    total += w[i]
    preSum.push(total)
  }

  this.preSum = preSum
  this.total = total
  this.len = n
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomNum = Math.floor(Math.random() * this.total)

  let l = 0
  let r = this.len

  while (l < r) {
    const mid = (l + r) >> 1
    if (this.preSum[mid] > randomNum) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
