/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1
  m--
  n--
  while (m >= 0 && n >= 0) {
    nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }

  while (n >= 0) {
    nums1[len--] = nums2[n--]
  }
}
