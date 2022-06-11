/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function (colors, queries) {
  const n = colors.length
  const map = new Map()

  for (let i = 0; i < n; i++) {
    if (!map.has(colors[i])) map.set(colors[i], [])
    map.get(colors[i]).push(i)
  }

  const ans = []

  for (const [i, c] of queries) {
    if (!map.has(c)) {
      ans.push(-1)
      continue
    }

    ans.push(search(map.get(c), i))
  }

  return ans

  function search(indexes, index) {
    let l = 0
    let r = indexes.length - 1

    if (indexes[l] > index) return indexes[l] - index

    if (indexes[r] < index) return index - indexes[r]

    while (l <= r) {
      const mid = (l + r) >> 1

      if (indexes[mid] === index) return 0
      else if (indexes[mid] < index) l = mid + 1
      else r = mid - 1
    }

    return Math.min(indexes[l] - index, index - indexes[l - 1])
  }
}
