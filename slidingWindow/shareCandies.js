/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var shareCandies = function (candies, k) {
  const totalMap = new Map()
  for (const candy of candies) {
    if (!totalMap.has(candy)) totalMap.set(candy, 0)
    totalMap.set(candy, totalMap.get(candy) + 1)
  }

  if (k === 0) return totalMap.size

  let shareCount = 0
  let l = 0
  let r = 0
  let ans = 0

  while (r < candies.length) {
    totalMap.set(candies[r], totalMap.get(candies[r]) - 1)
    if (totalMap.get(candies[r]) === 0) totalMap.delete(candies[r])
    shareCount += 1

    if (shareCount === k) {
      ans = Math.max(ans, totalMap.size)
      if (!totalMap.has(candies[l])) totalMap.set(candies[l], 0)
      totalMap.set(candies[l], totalMap.get(candies[l]) + 1)
      l++
      shareCount--
    }

    r++
  }

  return ans
}
