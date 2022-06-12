/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const left = (m + n + 1) >> 1
  const right = (m + n + 2) >> 1

  return (findKth(nums1, 0, m - 1, nums2, 0, n - 1, left) + findKth(nums1, 0, m - 1, nums2, 0, n - 1, right)) / 2

  function findKth(nums1, start1, end1, nums2, start2, end2, k) {
    const len1 = end1 - start1 + 1
    const len2 = end2 - start2 + 1

    if (len1 > len2) return findKth(nums2, start2, end2, nums1, start1, end1, k)

    if (len1 === 0) return nums2[start2 + k - 1]

    if (k === 1) return Math.min(nums1[start1], nums2[start2])

    const i = start1 + Math.min(len1, k >> 1) - 1
    const j = start2 + Math.min(len2, k >> 1) - 1

    if (nums1[i] > nums2[j]) {
      return findKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1))
    }

    return findKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1))
  }
}
