/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function(s, x, y) {
  let ans = 0
  let a = 'a'
  let b = 'b'
  if (x < y) {
    a = 'b'
    b = 'a'
    const tmp = x
    x = y
    y = tmp
  }

  let i = 0
  const len = s.length
  while (i < len) {
    while (i < len && s[i] !== a && s[i] !== b) i++

    let ca = 0
    let cb = 0
    while (i < len && (s[i] === a || s[i] === b)) {
      if (s[i] === a) {
        ca++
      } else {
        if (ca > 0) {
          ca--
          ans += x
        } else {
          cb++
        }
      }
      i++
    }
    ans += Math.min(ca, cb) * y
  }
  return ans
};