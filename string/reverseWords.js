/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(' ').filter((str) => str !== '')
  return arr.reverse().join('')
}

reverseWords('the sky is blue')
