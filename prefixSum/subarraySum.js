/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const sumMap = new Map()
  sumMap.set(0, 1)
  let sum = 0
  let count = 0

  for (const num of nums) {
    sum += num

    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k)
    }

    if (!sumMap.has(sum)) sumMap.set(sum, 0)
    sumMap.set(sum, sumMap.get(sum) + 1)
  }

  return count
}
