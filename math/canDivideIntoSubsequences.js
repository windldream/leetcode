/**
 * @param {number[]} nums
 * @param {number} K
 * @return {boolean}
 */
const canDivideIntoSubsequences = function(nums, K) {
  const map = new Map()
  let maxFreq = 0
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    maxFreq = Math.max(maxFreq, map.get(num))
  }

  if (maxFreq * K > nums.length) return false
  return true
};