/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
  return getCount(nums1, nums2) + getCount(nums2, nums1)

  function getCount(nums1, nums2) {
    let ans = 0
    const map = new Map()
    for (let i = 0; i < nums1.length; i++) {
      const val = nums1[i] ** 2
      if (!map.has(val)) {
        map.set(val, 0)
      }
      map.set(val, map.get(val) + 1)
    }

    for (let j = 0; j < nums2.length; j++) {
      for (let k = j + 1; k < nums2.length; k++) {
        const val = nums2[j] * nums2[k]
        if (map.has(val)) {
          ans += map.get(val)
        }
      }
    }

    return ans
  }
}
