/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  nums.forEach((num, idx, arr) => {
    if (num === 0) arr[idx] = -1
  })

  const sumMap = new Map([[0, -1]])
  let sum = 0
  let len = 0

  nums.forEach((num, idx) => {
    sum += num

    if (sumMap.has(sum)) {
      len = Math.max(len, idx - sumMap.get(sum))
    } else {
      sumMap.set(sum, idx)
    }
  })

  return len
}
