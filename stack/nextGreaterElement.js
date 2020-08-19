/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = []
  label: for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j])
        continue label
      }
    }
    res.push(-1)
  }
  return res
}
