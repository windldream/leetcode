/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const ans = Array(num_people).fill(0)
  let i = 0
  while (candies >= 0) {
    ans[i % num_people] += Math.min(candies, ++i)
    candies -= i
  }
  return ans
}

distributeCandies(10, 3)
