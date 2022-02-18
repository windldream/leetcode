/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length

  if (n & 1) return false

  let sum = 0

  for (let i = 0; i < n; i++) {
    if (locked[i] === '1' && s[i] === ')') {
      if (--sum < 0) return false
    } else {
      sum++
    }
  }

  sum = 0

  for (let i = n - 1; i >= 0; i--) {
    if (locked[i] === '1' && s[i] === '(') {
      if (--sum < 0) return false
    } else {
      sum++
    }
  }

  return true
}
