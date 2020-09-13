/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, X) {
  const len = customers.length
  const total = customers.reduce((pre, cur, index) => pre + (grumpy[index] ? 0 : cur), 0)
  let l = 0
  let r = 0
  let sum = 0
  let statsisfiedSum = 0
  let max = 0
  while (r < len) {
    sum += customers[r]
    statsisfiedSum += grumpy[r] ? 0 : customers[r]
    if (r - l + 1 === X) {
      max = Math.max(max, total - statsisfiedSum + sum)
      sum -= customers[l]
      statsisfiedSum -= grumpy[l] ? 0 : customers[l]
      l++
    }
    r++
  }
  return max
}

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
