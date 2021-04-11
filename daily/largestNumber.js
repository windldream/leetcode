/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const str = nums.sort((a, b) => +(b + '' + a) - +(a + '' + b)).join('')
  if (str[0] === '0') return '0'
  return str
}
