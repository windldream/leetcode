/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequentMap = new Map()
  for (const num of nums) {
    if (!frequentMap.has(num)) frequentMap.set(num, 0)
    frequentMap.set(num, frequentMap.get(num) + 1)
  }

  const keys = [...frequentMap.keys()].sort((a, b) => frequentMap.get(b) - frequentMap.get(a))
  return keys.slice(0, k)
}
