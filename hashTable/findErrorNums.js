/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  let ans = []
  for (let i = 1; i <= nums.length; i++) {
    if (ans[0] && ans[1]) break
    if (map.get(i) > 1) {
      ans[0] = i
    }
    if (!map.has(i)) {
      ans[1] = i
    }
  }

  return ans
}
