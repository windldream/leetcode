/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.map = new Map()
  this.len = n - blacklist.length
  let startNum = this.len

  for (const num of blacklist) {
    if (num < this.len) {
      while (blacklist.includes(startNum)) startNum++
      this.map.set(num, startNum++)
    }
  }
}

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const idx = Math.floor(Math.random() * this.len)

  if (this.map.has(idx)) return this.map.get(idx)

  return idx
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
