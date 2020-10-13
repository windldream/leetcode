/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function (nums1, nums2) {
  const mod = 10 ** 9 + 7
  const m = nums1.length
  const n = nums2.length
  let i = 0,
    j = 0,
    sum1 = 0,
    sum2 = 0,
    ans = 0
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      sum1 += nums1[i++]
    } else if (nums1[i] > nums2[j]) {
      sum2 += nums2[j++]
    } else {
      ans += Math.max(sum1, sum2) + nums1[i]
      sum1 = 0
      sum2 = 0
      i++
      j++
    }
  }
  while (i < m) sum1 += nums1[i++]
  while (j < n) sum2 += nums2[j++]
  ans = (Math.max(sum1, sum2) + ans) % mod
  return ans
}
