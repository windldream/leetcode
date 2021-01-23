/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
var numberOfDays = function (Y, M) {
  if (M === 2) {
    if (isLeapYear(Y)) return 29
    return 28
  }

  if ([1, 3, 5, 7, 8, 10, 12].includes(M)) return 31
  return 30

  function isLeapYear(num) {
    if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) return true
    return false
  }
}
