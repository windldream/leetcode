/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  if (n[0] === '-') {
    for (let i = 1; i < n.length; i++) {
      if (+n[i] > x) {
        return n.substring(0, i) + x + n.substring(i)
      }
    }
    return n + x
  } else {
    for (let i = 0; i < n.length; i++) {
      if (+n[i] < x) {
        return n.substring(0, i) + x + n.substring(i)
      }
    }
    return n + x
  }
}
