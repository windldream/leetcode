/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  const set = new Set()
  for (const candy of candies) {
    set.add(candy)
  }

  const len = candies.length
  return Math.min(len >> 1, set.size)
}
