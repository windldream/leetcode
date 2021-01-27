/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  const [h, m] = time.split(':')
  return getHour(h) + ':' + getMinute(m)

  function getMinute(m) {
    let ans = ''
    if (m[0] === '?' && m[1] === '?') {
      ans = '59'
    } else if (m[0] === '?') {
      ans = '5' + m[1]
    } else if (m[1] === '?') {
      ans = m[0] + '9'
    } else {
      ans = m
    }
    return ans
  }

  function getHour(h) {
    let ans = ''
    if (h[0] === '?' && h[1] === '?') {
      ans = '23'
    } else if (h[0] === '?') {
      if (h[1] < 4) {
        ans = '2' + h[1]
      } else {
        ans = '1' + h[1]
      }
    } else if (h[1] === '?') {
      if (h[0] < 2) {
        ans = h[0] + '9'
      } else {
        ans = h[0] + '3'
      }
    } else {
      ans = h
    }
    return ans
  }
}
