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
  let prev = nums[start++]
  for (let i = start; i < nums.length; i++) {
    const diff = nums[i] - prev
    if (diff > 3 || diff === 0 || wang < diff - 1) return false
    wang -= diff - 1
    prev = nums[i]
  }
  return true
}
