/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0

  for (let i = 0; i <= 31; i++) {
    let count = 0

    for (const num of nums) {
      if (num & (1 << i)) {
        count++
      }
    }

    if (count % 3) ans |= 1 << i
  }

  return ans
}
