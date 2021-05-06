/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
  const n = solution.length
  let x = 0
  const counterMap = Object.create(null)
  for (let i = 0; i < n; i++) {
    if (solution[i] === guess[i]) x += 1
    counterMap[solution[i]] = (counterMap[solution[i]] || 0) + 1
  }

  let total = 0
  for (let i = 0; i < n; i++) {
    if (counterMap[guess[i]]) {
      total += 1
      counterMap[guess[i]] -= 1
    }
  }
  return [x, total - x]
}
