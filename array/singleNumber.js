/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let ans = 0
  for (let i = 0; i < 32; i++) {
    const mask = 1 << i
    let count = 0
    for (const num of nums) {
      if (mask & num) count++
    }
    if (count % 3 !== 0) {
      ans = ans | mask
    }
  }
  return ans
};