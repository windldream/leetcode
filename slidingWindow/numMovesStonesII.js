/**
 * @param {number[]} stones
 * @return {number[]}
 */
var numMovesStonesII = function (stones) {
  stones.sort((a, b) => a - b)
  const len = stones.length
  const maxPlace = stones[len - 1] - stones[0] + 1 - len
  const max = maxPlace - Math.min(stones[len - 1] - stones[len - 2] - 1, stones[1] - stones[0] - 1)
  let min = max
  let i = 0
  let j = 0
  for (; i < len; i++) {
    while (j + 1 < len && stones[j + 1] - stones[i] + 1 <= len) {
      j++
    }
    let cost = len - (j - i + 1)
    if (j - i + 1 === len - 1 && stones[j] - stones[i] + 1 === len - 1) {
      cost = 2
    }
    min = Math.min(cost, min)
  }
  return [min, max]
}

numMovesStonesII([6, 5, 4, 3, 10])
