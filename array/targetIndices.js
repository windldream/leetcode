/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let less = 0
  let equal = 0

  for (const num of nums) {
    if (num < target) {
      less++
    } else if (num === target) {
      equal++
    }
  }

  const ans = []

  while (equal > 0) {
    ans.push(less++)
    equal--
  }

  return ans
}
