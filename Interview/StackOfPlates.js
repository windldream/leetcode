/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.size = cap
  this.stackList = []
}

/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
  if (this.size === 0) return
  for (let i = this.stackList.length - 1; i >= 0; i--) {
    const stack = this.stackList[i]
    if (stack.length < this.size) {
      stack.push(val)
      return
    }
  }
  this.stackList.push([val])
}

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
  if (this.size === 0) return -1
  if (this.stackList.length === 0) return -1
  const stack = this.stackList[this.stackList.length - 1]
  const val = stack.pop()
  if (stack.length === 0) {
    this.stackList.pop()
  }
  return val
}

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
  if (this.size === 0) return -1
  if (!this.stackList[index]) return -1
  const stack = this.stackList[index]
  const val = stack.pop()
  if (stack.length === 0) {
    this.stackList.splice(index, 1)
  }
  return val
}

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */
