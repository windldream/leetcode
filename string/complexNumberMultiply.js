/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  const nums1 = a.split('+')
  const x1 = nums1[0]
  const y1 = nums1[1].substring(0, nums1[1].length - 1)
  const nums2 = b.split('+')
  const x2 = nums2[0]
  const y2 = nums2[1].substring(0, nums2[1].length - 1)
  const x = x1 * x2 - y1 * y2
  const y = x1 * y2 + x2 * y1
  return `${x}+${y}i`
}
