var SortedStack = function () {
  this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  const len = this.stack.length
  if (len === 0 || this.stack[0] <= val) {
    this.stack.unshift(val)
    return
  }

  let l = 0
  let r = len
  while (l < r) {
    const mid = (l + r) >> 1
    if (this.stack[mid] > val) {
      l = mid + 1
    } else if (this.stack[mid] <= val) {
      r = mid
    }
  }
  this.stack.splice(l, 0, val)
}

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1]
  }
  return -1
}

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack.length === 0
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
