/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0
  for (let i = 0; i < 32; i++) {
    let cnt = 0
    for (const num of nums) {
      if (num & (1 << i)) {
        cnt += 1
      }
    }
    if (cnt % 3) {
      ans = ans | (1 << i)
    }
  }
  return ans
}
