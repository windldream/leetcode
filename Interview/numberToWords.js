/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const map = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety'
  }
  if (map[num]) return map[num]
  const billion = 10 ** 9
  const million = 10 ** 6
  const thousand = 10 ** 3
  const hundred = 10 ** 2

  let ans = ''
  if (num >= billion) {
    const n = Math.trunc(num / billion)
    const mod = num % billion
    ans = numberToWords(n) + ' Billion' + (mod > 0 ? ' ' + numberToWords(mod) : '')
  } else if (num >= million) {
    const n = Math.trunc(num / million)
    const mod = num % million
    ans = numberToWords(n) + ' Million' + (mod > 0 ? ' ' + numberToWords(mod) : '')
  } else if (num >= thousand) {
    const n = Math.trunc(num / thousand)
    const mod = num % thousand
    ans = numberToWords(n) + ' Thousand' + (mod > 0 ? ' ' + numberToWords(mod) : '')
  } else if (num >= hundred) {
    const n = Math.trunc(num / hundred)
    const mod = num % hundred
    ans = numberToWords(n) + ' Hundred' + (mod > 0 ? ' ' + numberToWords(mod) : '')
  } else {
    const n = Math.trunc(num / 10)
    const mod = num % 10
    ans = (n > 0 ? map[n * 10] : '') + (mod > 0 ? ' ' + map[mod] : '')
  }

  return ans
}
