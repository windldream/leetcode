/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const bucketsMap = new Map()
  const bucketSize = t + 1

  for (let i = 0; i < nums.length; i++) {
    const bucketNum = Math.floor(nums[i] / bucketSize)
    if (bucketsMap.has(bucketNum)) return true
    bucketsMap.set(bucketNum, nums[i])

    if (bucketsMap.has(bucketNum - 1) && Math.abs(bucketsMap.get(bucketNum - 1) - nums[i]) <= t) return true

    if (bucketsMap.has(bucketNum + 1) && Math.abs(bucketsMap.get(bucketNum + 1) - nums[i]) <= t) return true

    if (i >= k) {
      const deleteBucketNum = Math.floor(nums[i - k] / bucketSize)
      bucketsMap.delete(deleteBucketNum)
    }
  }

  return false
}
