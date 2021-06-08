/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1)
  }

  const keys = [...counter.keys()].sort((a, b) => b - a)
  if (keys.length === 1) return 0

  let total = 0
  let count = 0
  for (let i = 0; i < keys.length - 1; i++) {
    count += counter.get(keys[i])
    total += count
  }
  return total
}
