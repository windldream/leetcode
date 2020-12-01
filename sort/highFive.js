/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const map = new Map()
  for (const [id, score] of items) {
    if (!map.has(id)) {
      map.set(id, [])
    }
    map.get(id).push(score)
  }

  const ans = []
  const ids = [...map.keys()].sort((a, b) => a - b)
  for (const id of ids) {
    const scores = map.get(id)
    scores.sort((a, b) => b - a)
    let sum = 0
    for (let i = 0; i < 5; i++) {
      sum += scores[i]
    }
    ans.push([id, Math.trunc(sum / 5)])
  }
  return ans
}
