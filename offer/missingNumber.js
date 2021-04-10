/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   const n = nums.length
//   for (let i = 0; i <= n; i++) {
//     if (nums[i] !== i) return i
//   }
// }

var missingNumber = function (nums) {
  let l = 0
  let r = nums.length + 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] === mid) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}
