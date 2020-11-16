/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target)
  let i = 1
  while (true) {
    const sum = (i * (i + 1)) / 2
    if (sum >= target && (sum - target) % 2 === 0) return i
    i++
  }
}
