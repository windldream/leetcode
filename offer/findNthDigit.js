/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let start = 1
  let digit = 1
  let count = 9
  while (n > count) {
    n -= count
    start *= 10
    digit += 1
    count = 9 * start * digit
  }

  const num = start + ~~((n - 1) / digit)
  const idx = (n - 1) % digit
  return (num + '')[idx]
}
