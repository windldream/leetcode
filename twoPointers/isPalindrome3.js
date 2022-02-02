/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0
  let r = s.length - 1
  const reg = /\d|[A-Za-z]/

  while (l < r) {
    while (!reg.test(s[l]) && l < r) l++
    while (!reg.test(s[r]) && l < r) r--

    if (s[l++].toLowerCase() !== s[r--].toLowerCase()) return false
  }

  return true
}
