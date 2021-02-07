/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  let ans = 0
  for (const [key, val] of map) {
    if (val === 1) ans += key
  }
  return ans
}
