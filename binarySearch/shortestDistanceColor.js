/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
const shortestDistanceColor = function (colors, queries) {
  const map = new Map()
  const len = colors.length
  for (let i = 0; i < len; i++) {
    if (!map.has(colors[i])) {
      map.set(colors[i], [])
    }
    map.get(colors[i]).push(i)
  }

  const ans = []
  for (const [index, query] of queries) {
    if (!map.has(query)) {
      ans.push(-1)
      continue
    }
    const indexes = map.get(query)
    ans.push(search(indexes, index))
  }
  return ans

  function search(list, index) {
    if (list.includes(index)) return 0
    if (list[0] > index) return list[0] - index
    if (index > list[list.length - 1]) return index - list[list.length - 1]

    let l = 0
    let r = list.length - 1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (list[mid] < index) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return Math.min(list[l] - index, index - list[l - 1])
  }
}
