var FreqStack = function () {
  this.freq = new Map()
  this.group = new Map()
  this.maxFreq = 0
}

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
  let f = this.freq.has(x) ? this.freq.get(x) + 1 : 1
  this.freq.set(x, f)
  if (f > this.maxFreq) {
    this.maxFreq = f
  }
  if (!this.group.has(f)) {
    this.group.set(f, [])
  }
  this.group.get(f).push(x)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let x = this.group.get(this.maxFreq).pop()
  this.freq.set(x, this.freq.get(x) - 1)
  if (this.group.get(this.maxFreq).length === 0) {
    this.maxFreq--
  }
  return x
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
