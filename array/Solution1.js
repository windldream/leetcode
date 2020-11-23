/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums
  this.arr = nums.slice()
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.arr = this.original.slice()
  return this.arr
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const len = this.arr.length
  for (let i = 0; i < len; i++) {
    const random = Math.floor(Math.random() * (len - i)) + i
    ;[this.arr[i], this.arr[random]] = [this.arr[random], this.arr[i]]
  }
  return this.arr
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
