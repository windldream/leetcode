/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const str = n.toString(2)
  if (str.indexOf('1') === str.lastIndexOf('1')) return 0
  const len = str.length
  let i = str.indexOf('1')
  let ans = 0
  while (i < len) {
    let j = i + 1
    while (j < len && str[j] !== '1') {
      j++
    }
    if (str[j] === '1') {
      ans = Math.max(ans, j - i)
    }
    i = j
  }
  return ans
}

binaryGap(6)
