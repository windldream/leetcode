/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum === goal) return 0

  let diff
  if (sum > goal) {
    diff = sum - goal
  } else {
    diff = goal - sum
  }
  if (diff % limit === 0) return diff / limit
  return ~~(diff / limit) + 1
}
