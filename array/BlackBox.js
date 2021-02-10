/**
 * @param {number} n
 * @param {number} m
 */
var BlackBox = function (n, m) {
  const len = 2 * (m + n)
  this.state = Array(len).fill(false)
  this.clock = Array(len).fill(0)
  this.anticlock = Array(len).fill(0)
  for (let index = 0; index < len; index++) {
    this.clock[index] = (len - index + len) % len
    this.anticlock[index] = (2 * m - index + len) % len
  }
}

/**
 * @param {number} index
 * @param {number} direction
 * @return {number}
 */
BlackBox.prototype.open = function (index, direction) {
  const i = index
  this.state[index] = true
  if (direction == 1) {
    index = this.clock[index]
  } else {
    index = this.anticlock[index]
  }
  direction *= -1
  while (!this.state[index]) {
    if (this.clock[index] === index || this.anticlock[index] === index) {
      return i
    }
    if (direction == 1) {
      index = this.clock[index]
    } else {
      index = this.anticlock[index]
    }
    direction *= -1
  }
  return index
}

/**
 * @param {number} index
 * @return {void}
 */
BlackBox.prototype.close = function (index) {
  this.state[index] = false
}

/**
 * Your BlackBox object will be instantiated and called as such:
 * var obj = new BlackBox(n, m)
 * var param_1 = obj.open(index,direction)
 * obj.close(index)
 */
