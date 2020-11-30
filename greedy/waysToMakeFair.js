/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  const len = nums.length
  let even = 0
  let odd = 0
  for (let i = 0; i < len; i++) {
    if (i & 1) {
      odd += nums[i]
    } else {
      even += nums[i]
    }
  }

  let ans = 0
  let evenSum = 0
  let oddSum = 0
  for (let i = 0; i < len; i++) {
    let newOdd = 0
    let newEven = 0
    if (i & 1) {
      newEven = evenSum + odd - oddSum - nums[i]
      newOdd = oddSum + even - evenSum
      oddSum += nums[i]
    } else {
      newEven = evenSum + odd - oddSum
      newOdd = oddSum + even - evenSum - nums[i]
      evenSum += nums[i]
    }
    if (newEven === newOdd) ans++
  }
  return ans
}
