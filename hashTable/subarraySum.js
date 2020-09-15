/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const map = new Map()
  let sum = 0
  let ans = 0
  for (const num of nums) {
    sum += num
    if (sum === k) {
      ans++
    }
    const val = sum - k
    if (map.has(val)) {
      ans += map.get(val)
    }
    if (!map.has(sum)) {
      map.set(sum, 0)
    }
    map.set(sum, map.get(sum) + 1)
  }

  return ans
}
