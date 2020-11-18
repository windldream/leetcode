/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
  const ans = []
  let pow = 0
  while (pow < 31) {
    ans.push(2 ** pow)
    pow++
  }

  const str = (N + '').split('').sort().join('')
  return ans.some((num) => {
    return (num + '').split('').sort().join('') === str
  })
}

reorderedPowerOf2(46)
