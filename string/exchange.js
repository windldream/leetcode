/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function(nums) {
  const odd = []
  const even = []
  for (const num of nums) {
    if (num & 1) {
      odd.push(num)
    } else {
      even.push(num)
    }
  }

  return [...odd, ...even]
};