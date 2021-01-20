/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function (transactions) {
  const map = new Map()
  for (const [u, v, val] of transactions) {
    map.set(u, (map.get(u) || 0) - val)
    map.set(v, (map.get(v) || 0) + val)
  }

  const vals = [...map.values()].filter((val) => val !== 0)
  let ans = Infinity
  backtracking(0, 0, vals)
  return ans

  function backtracking(index, count, vals) {
    if (count > ans) return
    const len = vals.length
    while (index < len && vals[index] === 0) index++
    if (index === len) {
      ans = Math.min(ans, count)
      return
    }

    const cur = vals[index]
    for (let i = index + 1; i < len; i++) {
      if (cur * vals[i] < 0) {
        vals[i] += cur
        backtracking(index + 1, count + 1, vals)
        vals[i] -= cur
      }
    }
  }
}

minTransfers([
  [0, 1, 10],
  [1, 0, 1],
  [1, 2, 5],
  [2, 0, 5]
])
