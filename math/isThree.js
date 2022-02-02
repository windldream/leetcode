/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let cnt = 0

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      if (n / i !== i) {
        return false
      } else {
        cnt++
      }
    }
  }

  return cnt === 1
}
