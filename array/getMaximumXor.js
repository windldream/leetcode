/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  let total = 0
  for (const num of nums) total ^= num

  const ans = []
  while (nums.length) {
    let num = 0
    for (let i = 0; i < maximumBit; i++) {
      if ((total & (1 << i)) === 0) {
        num += 1 << i
      }
    }
    ans.push(num)
    total ^= nums.pop()
  }
  return ans
}

getMaximumXor([0, 1, 1, 3], 2)
