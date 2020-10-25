/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const len = gcd(str1.length, str2.length)
  const str = str1.substr(0, len)
  return str.repeat(str1.length / len) === str1 && str.repeat(str2.length / len) === str2 ? str : ''

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}

gcdOfStrings('ABABAB', 'ABABs')
