/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map()
  for (const word of words) {
    if (!map.has(word)) {
      map.set(word, 0)
    }
    map.set(word, map.get(word) + 1)
  }

  const res = []
  for (const item of map) {
    res.push(item)
  }
  return res
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] > b[0] ? 1 : -1
      }
      return b[1] - a[1]
    })
    .map((item) => item[0])
    .slice(0, k)
}
