/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const counter = new Map()
  let max = 0
  for (let i = lowLimit; i <= highLimit; i++) {
    let num = i
    let count = 0
    while (num > 0) {
      count += num % 10
      num = Math.trunc(num / 10)
    }
    let n = counter.get(count) || 0
    n++
    counter.set(count, n)
    max = Math.max(max, n)
  }
  return max
}
