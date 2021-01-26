/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
  const mostLanguage = new Map()
  const notConnected = new Map()
  for (const [u, v] of friendships) {
    if (!hasCommon(languages, u, v)) {
      notConnected.set(u, (notConnected.get(u) || 0) + 1)
      notConnected.set(v, (notConnected.get(v) || 0) + 1)
    }
  }
  for (const p of notConnected.keys()) {
    for (const lang of languages[p - 1]) {
      mostLanguage.set(lang, (mostLanguage.get(lang) || 0) + 1)
    }
  }

  let most = 0
  for (const val of mostLanguage.values()) {
    most = Math.max(most, val)
  }
  return notConnected.size - most

  function hasCommon(langs, i, j) {
    const lang1 = langs[i - 1]
    const lang2 = langs[j - 1]
    for (const l1 of lang1) {
      for (const l2 of lang2) {
        if (l1 === l2) return true
      }
    }
    return false
  }
}
