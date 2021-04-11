/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let negative = 0
  for (const num of nums) {
    if (num === 0) return 0
    if (num < 0) negative++
  }
  return negative & 1 ? -1 : 1
}
