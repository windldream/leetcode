var StockSpanner = function () {
  this.stack = []
  this.ans = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let ans = 1
  while (this.stack.length && this.stack[this.stack.length - 1] <= price) {
    this.stack.pop()
    ans += this.ans.pop()
  }
  this.stack.push(price)
  this.ans.push(ans)
  return ans
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
