/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  const max = Math.max(...nums)
  for (let x = 0; x <= max; x++) {
    const len = nums.filter((num) => num >= x).length
    if (x === len) return x
  }
  return -1
}
