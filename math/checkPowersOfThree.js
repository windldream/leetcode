/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n > 0) {
    const m = n % 3
    if (m === 2) return false
    n = ~~(n / 3)
  }
  return true
}

//
