/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let ans = 0
  let mask = 0

  for (let i = 31; i >= 0; i--) {
    mask = mask | (1 << i)
    const set = new Set()

    for (const num of nums) {
      set.add(num & mask)
    }

    const temp = ans | (1 << i)

    for (const num of set) {
      if (set.has(num ^ temp)) {
        ans = temp
        break
      }
    }
  }

  return ans
}
