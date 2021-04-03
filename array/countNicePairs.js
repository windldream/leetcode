/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const mod = 10 ** 9 + 7
  const n = nums.length
  const counterMap = new Map()
  let cnt = 0
  for (let i = 0; i < n; i++) {
    const num = nums[i] - rev(nums[i])
    counterMap.set(num, (counterMap.get(num) || 0) + 1)
  }

  for (const count of counterMap.values()) {
    cnt = (cnt + (count * (count - 1)) / 2) % mod
  }

  return cnt

  function rev(num) {
    return +(num + '').split('').reverse().join('')
  }
}
// 346
// 34
//
// 6 * 100 +  4 * 10 + 3
// nums[i] + rev(nums[j]) = nums[j] + rev(nums[i])
// -> nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])
// 3 * 2 / 2

countNicePairs([42, 11, 1, 97])
