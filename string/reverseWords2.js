/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse('').join(' ')
}
