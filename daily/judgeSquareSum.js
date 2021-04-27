/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let l = 0
  let r = ~~Math.sqrt(c)
  while (l <= r) {
    const total = l * l + r * r
    if (total > c) r--
    else if (total < c) l++
    else return true
  }
  return false
}

// (a + b) * (a + b) = a * a +
