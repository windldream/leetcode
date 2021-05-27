/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  const n = nums.length
  let ans = 0
  for (let i = 0; i < 31; i++) {
    let count = 0
    for (const num of nums) {
      if ((1 << i) & num) count++
    }
    ans += count * (n - count)
  }
  return ans
}
