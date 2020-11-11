/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const map = new Map()
  for (let i = 0; i < rounds.length - 1; i++) {
    let j
    if (i === 0) {
      j = rounds[i]
    } else {
      if (rounds[i] === n) {
        j = 1
      } else {
        j = rounds[i] + 1
      }
    }
    let k = rounds[i + 1]
    while (true) {
      if (!map.has(j)) {
        map.set(j, 0)
      }
      map.set(j, map.get(j) + 1)
      if (j === k) break
      if (j === n) {
        j = 1
      } else {
        j++
      }
    }
  }

  const max = Math.max(...map.values())
  const ans = []
  for (const [key, val] of map) {
    if (val === max) ans.push(key)
  }
  return ans.sort((a, b) => a - b)
}

mostVisited(2, [2, 1, 2, 1, 2, 1, 2, 1, 2])
