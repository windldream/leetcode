/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length
  if (len <= k) return s.split('').reverse().join('')
  s = s.split('')
  let ans = ''
  let i = 0
  while (len - i > k) {
    ans += s
      .slice(i, i + k)
      .reverse()
      .join('')
    ans += s.slice(i + k, i + k + k).join('')
    i += k + k
  }
  ans += s
    .slice(i, i + k)
    .reverse()
    .join('')
  return ans
}

reverseStr('hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl', 39)
