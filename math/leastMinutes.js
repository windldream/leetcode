/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  let res = 1
  let now = 1
  while (now < n) {
    now *= 2
    res++
  }
  return res
}
