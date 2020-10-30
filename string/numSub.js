/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  const mod = 10 ** 9 + 7
  let ans = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++
    } else {
      ans = (ans + ((count + 1) * count) / 2) % mod
      count = 0
    }
  }
  ans = (ans + ((count + 1) * count) / 2) % mod
  return ans
}

numSub('0110111')
