/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const len = Math.trunc(nums.length / 3)
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  const ans = []
  for (const [key, val] of map) {
    if (val > len) ans.push(key)
  }
  return ans
}

majorityElement([3, 2, 3])
