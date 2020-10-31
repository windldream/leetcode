/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  if (check(a, b) || check(b, a)) return true
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')
  if (check(a, b) || check(b, a)) return true
  return false

  function check(a, b) {
    const len = a.length
    let flag = true
    for (let i = 0; i < len / 2; i++) {
      if (flag) {
        if (a[i] !== b[len - i - 1]) {
          flag = false
        }
      }
      if (!flag) {
        if (a[i] !== a[len - i - 1]) return false
      }
    }
    return true
  }
}

checkPalindromeFormation('xbdef', 'xecab')
