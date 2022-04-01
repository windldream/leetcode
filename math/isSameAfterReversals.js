/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  const str = num + ''

  if (str.length > 1 && str.endsWith('0')) return false

  return str === str.split('').reverse().reverse().join('')
}
