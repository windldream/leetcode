/**
 * @param {string[]} features
 * @param {string[]} responses
 * @return {string[]}
 */
var sortFeatures = function (features, responses) {
  const map = new Map()
  for (const feature of features) {
    map.set(feature, 0)
  }

  for (const res of responses) {
    const str = res.split(' ')
    const set = new Set()
    for (const s of str) {
      if (map.has(s)) {
        set.add(s)
      }
    }
    for (const s of set) {
      map.set(s, map.get(s) + 1)
    }
  }

  features.sort((a, b) => map.get(b) - map.get(a))
  return features
}

sortFeatures(['a', 'aa', 'b', 'c'], ['a', 'a aa', 'a a a a a', 'b a'])
