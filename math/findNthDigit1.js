/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let base = 9
  let digits = 1
  while (n - base * digits > 0) {
    n -= base * digits
    base *= 10
    digits++
  }

  let idx = n % digits
  if (idx === 0) idx = digits
  let number = 1
  for (let i = 1; i < digits; i++) {
    number *= 10
  }
  if (idx === digits) {
    number += n / digits - 1
  } else {
    number += Math.trunc(n / digits)
  }
  for (let i = idx; i < digits; i++) {
    number = Math.trunc(number / 10)
  }
  return number % 10
}

findNthDigit(11)
