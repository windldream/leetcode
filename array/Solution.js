/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let ans = null
  let count = 1
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      if (Math.floor(Math.random() * count) === 0) {
        ans = i
      }
      count++
    }
  }
  return ans
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
