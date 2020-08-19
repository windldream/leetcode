/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = []
  const map = new Map()
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map.set(stack.pop(), nums2[i])
    }
    stack.push(nums2[i])
  }

  return nums1.map((num) => (map.has(num) && map.get(num)) || -1)
}
