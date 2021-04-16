/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const n = nums.length
  const allBuckets = new Map()
  const bucketSize = t + 1
  for (let i = 0; i < n; i++) {
    const bucketNum = nums[i] >= 0 ? ~~(nums[i] / bucketSize) : Math.floor(nums[i] / bucketSize)
    // 当前存在编号为bucketNum的桶了
    if (allBuckets.has(bucketNum)) return true
    allBuckets.set(bucketNum, nums[i])
    // 前面一个桶存在这么一个数，满足条件
    if (allBuckets.has(bucketNum - 1) && Math.abs(allBuckets.get(bucketNum - 1) - nums[i]) <= t) return true
    // 后面一个桶存在
    if (allBuckets.has(bucketNum + 1) && Math.abs(allBuckets.get(bucketNum + 1) - nums[i]) <= t) return true
    // i >= k 时，删除索引差大于等于 k 的桶
    if (i >= k) {
      const delBucketNum = nums[i] > 0 ? ~~(nums[i - k] / bucketSize) : Math.floor(nums[i - k] / bucketSize)
      allBuckets.delete(delBucketNum)
    }
  }
  return false
}

containsNearbyAlmostDuplicate([1, 2], 0, 1)
