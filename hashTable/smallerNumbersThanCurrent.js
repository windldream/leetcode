/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  const res = []
  for (const num of nums) {
    let count = 0
    for (const [key, val] of map) {
      if (key < num) {
        count += val
      }
    }
    res.push(count)
  }
  return res
}
