/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => b - a)

  let ans = 0
  for (let i = 0; i < nums1.length; i++) {
    ans += nums1[i] * nums2[i]
  }
  return ans
}
