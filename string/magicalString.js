/**
 * @param {number} n
 * @return {number}
 */
const magicalString = function (n) {
  let index = 2
  let str = '122'
  while (str.length < n) {
    str += '1'.repeat(str[index++] - 0)
    str += '2'.repeat(str[index++] - 0)
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    if (str[i] === '1') ans++
  }
  return ans
}
