var ProductOfNumbers = function () {
  this.numbers = []
  this.zeroIndex = -1
}

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.numbers.push(num)
    this.zeroIndex = this.numbers.length - 1
  } else if (this.numbers.length === 0 || this.zeroIndex === this.numbers.length - 1) {
    this.numbers.push(num)
  } else {
    this.numbers.push(num * this.numbers[this.numbers.length - 1])
  }
}

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const len = this.numbers.length
  if (len - k <= this.zeroIndex) {
    return 0
  } else if (len - k - 1 === this.zeroIndex) {
    return this.numbers[len - 1]
  }
  return this.numbers[len - 1] / this.numbers[len - k - 1]
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
