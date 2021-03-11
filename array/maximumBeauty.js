/**
 * @param {number[]} flowers
 * @return {number}
 */
var maximumBeauty = function (flowers) {
  const n = flowers.length
  const indexMap = new Map()
  for (let i = 0; i < n; i++) {
    if (!indexMap.has(flowers[i])) indexMap.set(flowers[i], [])
    indexMap.get(flowers[i]).push(i)
  }

  const prefixSum = Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + (flowers[i] > 0 ? flowers[i] : 0)
  }

  let ans = -Infinity
  for (const [key, indexes] of indexMap) {
    if (indexes.length > 1) {
      let first = indexes[0]
      let last = indexes[indexes.length - 1]
      const sum = flowers[first] + flowers[last] + prefixSum[last] - prefixSum[first + 1]
      ans = Math.max(ans, sum)
    }
  }
  return ans
}
