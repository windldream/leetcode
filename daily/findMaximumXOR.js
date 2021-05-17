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
    let tmp = ans | (1 << i)
    for (const num of set) {
      if (set.has(num ^ tmp)) {
        ans = tmp
        break
      }
    }
  }
  return ans
}

// 100
// 010

// 11001
// 00101

// 1010
// 1000
// 0001
