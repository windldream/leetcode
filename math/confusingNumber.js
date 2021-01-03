/**
 * @param {number} N
 * @return {boolean}
 */
var confusingNumber = function(N) {
  const map = {
    '0': 0,
    '1': 1,
    '6': 9,
    '8': 8,
    '9': 6
  }
  let str = ''
  const n = N + ''
  for (let i = n.length - 1; i >= 0; i--) {
    if (!map.hasOwnProperty(n[i])) return false
    str += map[n[i]]
  }
  return +str !== N
};