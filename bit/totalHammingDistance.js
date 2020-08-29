/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let ans = 0
  for (let i = 0; i < 31; i++) {
    const count = [0, 0]
    for (let j = 0; j < nums.length; j++) {
      count[nums[j] & 1]++
      nums[j] >>= 1
    }
    ans += count[0] * count[1]
  }
  return ans
}
