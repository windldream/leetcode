/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
  const word = number.replaceAll(' ', '').replaceAll('-', '')
  let len = word.length
  let ans = ''
  let i = 0
  for (; i < len - 4; i += 3) {
    ans += word.substr(i, 3) + '-'
  }

  if (len - i > 3) {
    ans += word.substr(i, 2) + '-' + word.substring(i + 2)
  } else {
    ans += word.substring(i)
  }

  return ans
};