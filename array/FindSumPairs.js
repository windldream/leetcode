/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  this.countMap1 = new Map()
  for (const num of nums1) {
    this.countMap1.set(num, (this.countMap1.get(num) || 0) + 1)
  }
  this.countMap2 = new Map()
  for (const num of nums2) {
    this.countMap2.set(num, (this.countMap2.get(num) || 0) + 1)
  }
  this.nums2 = nums2
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  const num = this.nums2[index]
  this.nums2[index] += val
  this.countMap2.set(num + val, (this.countMap2.get(num + val) || 0) + 1)
  this.countMap2.set(num, this.countMap2.get(num) - 1)
}

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let count = 0
  for (const [num1, cnt1] of this.countMap1) {
    const cnt2 = this.countMap2.get(tot - num1) || 0
    count += cnt1 * cnt2
  }
  return count
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
