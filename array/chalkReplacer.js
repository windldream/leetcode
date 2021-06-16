/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const n = chalk.length
  const sum = chalk.reduce((prev, curr) => prev + curr, 0)
  k = k % sum

  let total = 0
  for (let i = 0; i < n; i++) {
    if (total + chalk[i] > k) return i
    total += chalk[i]
  }
}
