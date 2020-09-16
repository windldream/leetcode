/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  const map = new Map()
  let count = 0
  let preSumModK = 0
  map.set(0, 1)
  for (const num of A) {
    preSumModK = (preSumModK + num) % K
    if (preSumModK < 0) {
      preSumModK += K
    }
    if (map.has(preSumModK)) {
      count += map.get(preSumModK)
      map.set(preSumModK, map.get(preSumModK) + 1)
    } else {
      map.set(preSumModK, 1)
    }
  }
  return count
}

subarraysDivByK([4, 5, 0, -2, -3, 1], 5)
