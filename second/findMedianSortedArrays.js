/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length
  let m = nums2.length
  const ans = []
  let i = 0
  let j = 0
  while (i < n && j < m) {
    if (nums1[i] < nums2[j]) {
      ans.push(nums1[i++])
    } else {
      ans.push(nums2[j++])
    }
  }

  if (i < n) {
    ans.push(...nums1.slice(i))
  }
  if (j < m) {
    ans.push(...nums2.slice(j))
  }

  const mid = ans.length >> 1
  if (ans.length & 1) return ans[mid]
  return (ans[mid - 1] + ans[mid]) / 2
}
