/**
 * @param {string} num
 * @return {string}
 */
var toHexspeak = function (num) {
  const hexNum = convert(num)
  return /\d/.test(hexNum) ? 'ERROR' : hexNum

  function convert(num) {
    const map = {
      0: 'O',
      1: 'I',
      10: 'A',
      11: 'B',
      12: 'C',
      13: 'D',
      14: 'E',
      15: 'F'
    }
    let ans = ''
    while (num) {
      const m = num % 16
      ans = (map[m] ? map[m] : m) + ans
      num = Math.trunc(num / 16)
    }
    return ans
  }
}

toHexspeak('257')
