var StockSpanner = function () {
  this.stack = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let res = 0
  for (let i = this.stack.length - 1; i >= 0; i--) {
    if (this.stack[i] <= price) {
      res++
    } else {
      break
    }
  }
  this.stack.push(price)
  return res + 1
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
