// 树状数组
class FenwichTree {
  constructor(nums) {
    this.sums = Array(nums.length + 1).fill(0)
    this.nums = nums
    for (let i = 0; i < nums.length; i++) {
      this.updateBit(i + 1, nums[i])
    }
  }

  update(i, val) {
    this.updateBit(i + 1, val - this.nums[i])
    this.nums[i] = val
  }

  updateBit(i, diff) {
    while (i < this.sums.length) {
      this.sums[i] += diff
      i += this.lowBit(i)
    }
  }

  sumRange(i, j) {
    return this.preSum(j + 1) - this.preSum(i)
  }

  preSum(i) {
    let sum = 0
    while (i > 0) {
      sum += this.sums[i]
      i -= this.lowBit(i)
    }
    return sum
  }

  lowBit(i) {
    return i & -i
  }
}
