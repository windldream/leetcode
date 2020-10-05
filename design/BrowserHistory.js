/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.stack = []
  this.curIndex = 0
  this.stack.push(homepage)
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.stack = this.stack.slice(0, this.curIndex + 1)
  this.stack.push(url)
  this.curIndex = this.stack.length - 1
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.curIndex = Math.max(this.curIndex - steps, 0)
  return this.stack[this.curIndex]
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.curIndex = Math.min(this.curIndex + steps, this.stack.length - 1)
  return this.stack[this.curIndex]
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
