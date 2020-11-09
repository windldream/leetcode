/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies)
  const ans = []
  for (const candy of candies) {
    ans.push(candy + extraCandies >= max)
  }
  return ans
}
