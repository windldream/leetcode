/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumbers = function(nums) {
  let res = 0
  for (const num of nums) {
    res = res ^ num
  }

  let mask = 1
  while ((mask & res) === 0) {
    mask = mask << 1
  }

  let a = 0
  let b = 0
  for (const num of nums) {
    if ((mask & num) === 0) {
      a = a ^ num
    } else  {
      b = b ^ num
    }
  }
  return [a, b]
};