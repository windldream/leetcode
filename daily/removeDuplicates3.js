/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// }

var removeDuplicates = function (nums) {
  const n = nums.length
  if (n < 2) return n
  let j = 0
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[j]) nums[++j] = nums[i]
  }
  return j + 1
}
