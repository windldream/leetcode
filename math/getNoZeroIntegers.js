/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  const mid = n >> 1
  for (let i = 1; i <= mid; i++) {
    if (isNoZero(i) && isNoZero(n - i)) return [i, n - i]
  }

  function isNoZero(num) {
    return !(num + '').includes('0')
  }
}
