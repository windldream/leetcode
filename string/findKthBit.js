/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let str = '0'
  for (let i = 2; i <= n; i++) {
    str = str + '1' + reverse(invert(str))
  }
  return str[k - 1]

  function invert(str) {
    let ans = ''
    for (const c of str) {
      ans += c === '1' ? '0' : '1'
    }
    return ans
  }

  function reverse(str) {
    return str.split('').reverse().join('')
  }
}

findKthBit(4, 11)
