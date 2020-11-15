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

  let index = n % digits
  if (index === 0) {
    index = digits
  }
  let nubmer = 1
  for (let i = 1; i < digits; i++) {
    nubmer *= 10
  }
  if (index === digits) {
    nubmer += n / digits - 1
  } else {
    nubmer += Math.trunc(n / digits)
  }
  for (let i = index; i < digits; i++) {
    nubmer = Math.trunc(nubmer / 10)
  }
  return nubmer % 10
}

findNthDigit(365)
