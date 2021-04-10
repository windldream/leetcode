/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  const n = bucket.length
  const max = Math.max(...vat)
  if (max === 0) return 0

  let ans = Infinity
  for (let i = 1; i <= max; i++) {
    let cur = i
    for (let j = 0; j < n; j++) {
      // 每个水桶的最小容量
      const least = Math.ceil(vat[j] / i)
      cur += Math.max(least - bucket[j], 0)
    }
    ans = Math.min(ans, cur)
  }
  return ans
}

//
