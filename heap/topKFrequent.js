/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const mapCount = new Map()
  nums.forEach((val) => {
    if (!mapCount.has(val)) {
      mapCount.set(val, 0)
    }
    mapCount.set(val, mapCount.get(val) + 1)
  })

  const keys = []
  for (const key of mapCount.keys()) {
    keys.push(key)
  }
  keys.sort((a, b) => mapCount.get(b) - mapCount.get(a))
  return keys.slice(0, k)
}
