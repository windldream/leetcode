/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  const arr = Array(n).fill(0)
  let index = 1
  while (index <= n) {
    for (let i = index - 1; i < n; i += index) {
      arr[i] ^= 1
    }
    index++
  }
  return arr.reduce((prev, cur) => prev + cur, 0)
}
