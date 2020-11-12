/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }
  nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) return b - a
    return map.get(a) - map.get(b)
  })
  return nums
}
