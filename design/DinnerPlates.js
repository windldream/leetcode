/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
  this.stackList = [[]]
  this.capacity = capacity
  this.vacantIndex = 0
  this.nonEmptyIndex = 0
}

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  const stack = this.stackList[this.vacantIndex]
  if (stack.length === 0) {
    if (this.vacantIndex > this.nonEmptyIndex) {
      this.nonEmptyIndex = this.vacantIndex
    }
  }
  stack.push(val)
  if (stack.length === this.capacity) {
    if (this.vacantIndex === this.stackList.length - 1) {
      this.stackList.push([])
    }
    for (let i = this.vacantIndex + 1; i < this.stackList.length; i++) {
      if (this.stackList[i].length < this.capacity) {
        this.vacantIndex = i
        break
      }
    }
  }
}

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  if (this.nonEmptyIndex < this.vacantIndex) {
    this.vacantIndex = this.nonEmptyIndex
  }
  const stack = this.stackList[this.nonEmptyIndex]
  if (stack.length === 1) {
    for (let i = this.nonEmptyIndex - 1; i >= 0; i--) {
      if (this.stackList[i].length) {
        this.nonEmptyIndex = i
        break
      }
    }
  }
  if (stack.length) {
    return stack.pop()
  }
  return -1
}

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  if (this.stackList.length <= index) return -1
  if (this.stackList[index].length === 0) return -1
  if (index < this.vacantIndex) {
    this.vacantIndex = index
  }
  if (index === this.nonEmptyIndex) {
    const stack = this.stackList[index]
    if (stack.length === 1) {
      for (let i = this.nonEmptyIndex - 1; i >= 0; i--) {
        if (this.stackList[i].length) {
          this.nonEmptyIndex = i
          return stack.pop()
        }
      }
    }
  }
  return this.stackList[index].pop()
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
