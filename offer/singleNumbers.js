/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumbers = function (nums) {
//   const ans = []
//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) ans.push(nums[i])
//   }
//   return ans
// }

var singleNumbers = function (nums) {
  let k = 0
  for (const num of nums) {
    k ^= num
  }

  let mask = 1
  while ((k & mask) === 0) {
    mask <<= 1
  }

  let a = 0
  let b = 0
  for (const num of nums) {
    if ((num & mask) === 0) {
      a ^= num
    } else {
      b ^= num
    }
  }
  return [a, b]
}
