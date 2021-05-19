/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const couterMap = new Map()
  for (const word of words) {
    couterMap.set(word, (couterMap.get(word) || 0) + 1)
  }

  const keyes = [...couterMap.keys()].sort((a, b) => {
    if (couterMap.get(a) === couterMap.get(b)) return a.localeCompare(b)
    return couterMap.get(b) - couterMap.get(a)
  })

  return keyes.slice(0, k)
}
