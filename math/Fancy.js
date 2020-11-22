var Fancy = function () {
  this.arr = []
  this.ops = []
}

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function (val) {
  this.arr.push(val)
}

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function (inc) {
  this.ops.push(['+', inc, this.arr.length])
}

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function (m) {
  this.ops.push(['*', m, this.arr.length])
}

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function (idx) {
  if (this.arr.length <= idx) return -1
  let sum = this.arr[idx]
  const mod = 10 ** 9 + 7
  for (const [op, num, i] of this.ops) {
    if (idx >= i) continue
    if (op === '+') {
      sum = (num + sum) % mod
    } else {
      sum = (num * sum) % mod
    }
  }
  return sum
}

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
