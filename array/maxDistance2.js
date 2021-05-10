/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  const n = nums1.length
  let ans = 0
  for (let i = 0; i < n; i++) {
    const idx = search(nums2, i, nums1[i])
    if (idx !== -1 && idx - i >= ans) {
      ans = idx - i
    }
  }
  return ans

  function search(nums, i, target) {
    let l = i
    let r = nums.length - 1
    let ans = -1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] >= target) {
        ans = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return ans
  }
}

maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5])
