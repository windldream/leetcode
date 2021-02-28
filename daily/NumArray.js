/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const n = nums.length
  const prefixSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i]
  }
  this.prefixSum = prefixSum
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.prefixSum[j + 1] - this.prefixSum[i]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
