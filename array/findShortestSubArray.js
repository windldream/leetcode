/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map()
  let max = 0
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    max = Math.max(max, map.get(num))
  }

  let ans = Infinity
  for (const [num, count] of map) {
    if (count === max) {
      const start = nums.indexOf(num)
      const end = nums.lastIndexOf(num)
      ans = Math.min(ans, end - start + 1)
    }
  }
  return ans
}

findShortestSubArray([1, 2, 2, 3, 1])
