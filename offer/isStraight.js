/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  nums.sort((a, b) => a - b)
  let wang = 0
  let start = 0
  while (nums[start] === 0) {
    start++
    wang++
  }
  for (let i = start + 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1]
    if (diff > 3 || diff === 0 || wang < diff - 1) return false
    wang -= diff - 1
  }
  return true
}
