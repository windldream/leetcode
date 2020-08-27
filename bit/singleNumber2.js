/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0
  for (let i = 0; i < 32; i++) {
    let mask = 1 << i
    let count = 0
    for (let j = 0; j < nums.length; j++) {
      if ((nums[j] & mask) !== 0) {
        count++
      }
    }
    if (count % 3 !== 0) {
      res |= mask
    }
  }
  return res
}
