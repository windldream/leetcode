/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  return target.sort((a, b) => a - b).join('&') === arr.sort((a, b) => a - b).join('&')
}
