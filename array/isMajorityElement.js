/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const isMajorityElement = function(nums, target) {
  const len = nums.length
  const appearLen = nums.filter(num => num === target).length
  return appearLen > len / 2
};