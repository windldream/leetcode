/**
 * @param {number} n_rows
 * @param {number} n_cols
 */
var Solution = function (n_rows, n_cols) {
  const map = new Map()
  this.map = map
  this.total = n_rows * n_cols
  this.col = n_cols
}

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
  if (this.map.size === this.total) return

  const random = Math.trunc(Math.random() * this.total)
  while (this.map.get(random) === 1) {
    return this.flip()
  }
  const row = Math.trunc(random / this.col)
  const col = random % this.col
  this.map.set(random, 1)
  return [row, col]
}

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
  this.map.clear()
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n_rows, n_cols)
 * var param_1 = obj.flip()
 * obj.reset()
 */
