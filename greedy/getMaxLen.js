/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  const len = nums.length
  const arr = []
  let start = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      if (nums[start] === 0) {
        start = i + 1
        continue
      }
      arr.push(nums.slice(start, i))
      start = i + 1
    }
  }
  arr.push(nums.slice(start, len))

  let max = 0
  for (const list of arr) {
    if (list.length <= max) continue
    const sum = list.reduce((prev, cur) => prev + (cur < 0 ? 1 : 0), 0)
    if (sum % 2 === 0) {
      max = Math.max(max, list.length)
      continue
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i] < 0) {
        max = Math.max(max, list.length - i - 1)
        break
      }
    }
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i] < 0) {
        max = Math.max(max, i)
        break
      }
    }
  }
  return max
}

getMaxLen([1, 2, 3, 5, -6, 4, 0, 10])
