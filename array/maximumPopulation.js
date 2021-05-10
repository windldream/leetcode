/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const population = Array(100).fill(0)
  let max = -Infinity
  let ans = -1
  for (const [birth, death] of logs) {
    for (let i = birth - 1950; i < death - 1950; i++) {
      population[i] += 1
      if (population[i] > max) {
        max = population[i]
        ans = i + 1950
      } else if (population[i] === max) ans = Math.min(ans, i + 1950)
    }
  }
  return ans
}
