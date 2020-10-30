/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let [day, mon, year] = date.split(' ')
  const monMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }
  day = day.replace(/[a-z]/g, '')
  return `${year}-${monMap[mon]}-${day.length > 1 ? day : '0' + day}`
}
