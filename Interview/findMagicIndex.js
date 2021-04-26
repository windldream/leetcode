/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMagicIndex = function (nums) {
//   const num = nums.find((val, idx) => val === idx)
//   return num === undefined ? -1 : num
// }

// var findMagicIndex = function (nums) {
//   let i = 0
//   while (i < nums.length) {
//     if (nums[i] === i) return i
//     i = Math.max(nums[i], i + 1)
//   }
//   return -1
// }

var findMagicIndex = function (nums) {
  return find(nums, 0, nums.length - 1)

  function find(nums, l, r) {
    if (l > r) return -1
    const mid = (l + r) >> 1
    const left = find(nums, l, mid - 1)
    if (left !== -1) return left
    if (nums[mid] === mid) return mid
    return find(nums, mid + 1, r)
  }
}
