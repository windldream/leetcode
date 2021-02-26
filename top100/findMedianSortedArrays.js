/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let n = nums1.length
//   let m = nums2.length
//   const ans = []
//   let i = 0
//   let j = 0
//   while (i < n && j < m) {
//     if (nums1[i] < nums2[j]) {
//       ans.push(nums1[i++])
//     } else {
//       ans.push(nums2[j++])
//     }
//   }

//   if (i < n) {
//     ans.push(...nums1.slice(i))
//   }
//   if (j < m) {
//     ans.push(...nums2.slice(j))
//   }

//   const mid = ans.length >> 1
//   if (ans.length & 1) return ans[mid]
//   return (ans[mid - 1] + ans[mid]) / 2
// }
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const m = nums1.length
  const n = nums2.length
  const leftTotal = (m + n + 1) >> 1
  let l = 0
  let r = m
  let mid1 = 0
  let mid2 = 0
  while (l <= r) {
    const i = (l + r) >> 1
    const j = leftTotal - i
    const numsIl = i === 0 ? -Infinity : nums1[i - 1]
    const numsI = i === m ? Infinity : nums1[i]
    const numsJl = j === 0 ? -Infinity : nums2[j - 1]
    const numsJ = j === n ? Infinity : nums2[j]
    if (numsIl <= numsJ) {
      mid1 = Math.max(numsIl, numsJl)
      mid2 = Math.min(numsI, numsJ)
      l = i + 1
    } else {
      r = i - 1
    }
  }

  return (m + n) & 1 ? mid1 : (mid1 + mid2) / 2
}

findMedianSortedArrays([1], [])
