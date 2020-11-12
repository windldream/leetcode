/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
  let g = 0
  const map = new Map()
  for (let i = 0; i < 4; i++) {
    if (guess[i] === solution[i]) g++
    if (!map.has(solution[i])) {
      map.set(solution[i], 0)
    }
    map.set(solution[i], map.get(solution[i]) + 1)
  }

  let total = 0
  for (let i = 0; i < 4; i++) {
    if (map.get(guess[i]) > 0) {
      map.set(guess[i], map.get(guess[i]) - 1)
      total++
    }
  }

  return [g, total - g]
}
