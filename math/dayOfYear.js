/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  const [year, mon, day] = date.split('-')
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let ans = 0
  for (let i = 0; i < mon - 1; i++) ans += days[i]
  ans += +day
  if (mon <= 2) return ans
  if ((year % 4 === 0 && year % 100) || year % 400 === 0) {
    ans++
  }
  return ans
}

dayOfYear('1976-01-24')
