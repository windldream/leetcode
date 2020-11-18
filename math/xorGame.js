/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
  let sum = 0
  for (const num of nums) {
    sum ^= num
  }

  if (sum === 0 || nums.length % 2 === 0) return true
  return false
}
