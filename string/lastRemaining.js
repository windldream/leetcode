/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let remain = n
  let flag = true
  let res = 1
  let step = 1
  while (remain > 1) {
    if (flag || remain & 1) {
      res += step
    }
    flag = !flag
    step *= 2
    remain = remain >> 1
  }
  return res
}

lastRemaining(9)
