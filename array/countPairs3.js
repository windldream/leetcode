/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var countPairs = function (nums1, nums2) {
  const n = nums1.length
  const diff = []
  for (let i = 0; i < n; i++) {
    diff.push(nums1[i] - nums2[i])
  }
  diff.sort((a, b) => a - b)

  let ans = 0
  for (let i = 0; i < n - 1; i++) {
    let l = i + 1
    let r = n - 1
    let idx = n
    while (l <= r) {
      const mid = ((r - l) >> 1) + l
      if (diff[i] + diff[mid] <= 0) {
        l = mid + 1
      } else if (diff[i] + diff[mid] > 0) {
        r = mid - 1
        idx = mid
      }
    }

    if (idx < n && diff[i] + diff[idx] > 0) {
      ans += n - l
    }
  }
  return ans
}
