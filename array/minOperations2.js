/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  let sum1 = nums1.reduce((prev, curr) => prev + curr, 0)
  let sum2 = nums2.reduce((prev, curr) => prev + curr, 0)
  if (sum1 > sum2) return minOperations(nums2, nums1)
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const n = nums1.length
  const m = nums2.length
  let i = 0
  let j = m - 1
  let count = 0
  while (sum1 < sum2 && i < n && j >= 0) {
    if (6 - nums1[i] > nums2[j] - 1) {
      sum1 += 6 - nums1[i]
      i++
    } else {
      sum2 -= nums2[j] - 1
      j--
    }
    count++
  }

  while (sum1 < sum2 && i < n) {
    if (nums1[i] !== 6) {
      sum1 += 6 - nums1[i]
      count++
    }
    i++
  }

  while (sum1 < sum2 && j >= 0) {
    if (nums2[j] !== 1) {
      sum2 -= nums2[j] - 1
      count++
    }
    j--
  }

  return sum1 >= sum2 ? count : -1
}
