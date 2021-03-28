/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const reg = /[a-z]+/
  const nums = word
    .split(reg)
    .filter((str) => str.length)
    .map((str) => +str)
  return [...new Set(nums)].length
}
