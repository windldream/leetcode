/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function (date1, date2) {
  const timestamp1 = +new Date(date1)
  const timestamp2 = +new Date(date2)
  const diff = Math.abs(timestamp1 - timestamp2)
  return diff / 1000 / 60 / 60 / 24
}
